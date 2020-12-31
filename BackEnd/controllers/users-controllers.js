const HttpError = require('../error-handle/http-error');  //dùng để giải quyết error
const models = require('../models'); //vì đang trong controllers nên phải ra ngoài thêm 1 chấm mới thấy đc models
const User = models.User;

const brcypt = require('bcryptjs');
const { validationResult } = require('express-validator'); //lấy dc lỗi từ body validate

const {JWT_SECRET, GMAIL_USER, GMAIL_PASS,PORT} = require('../config')
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const {getToken} = require('../middleware/check-auth');

const Sequelize = require('sequelize');
const Op = Sequelize.Op; 

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    },
  });


const getUser = async (req, res, next) => {
    let users;
    try{
        users = await User.findAll();
    } catch (err) {
        const error = new HttpError('Something went wrong, coud not find any users', 500);
        return next(error);
    }

    if(!users)
    {
        const error =  new HttpError('Could not find any users', 404);
        return next(error);
    }
    res.status(200).json({users});
};

const getUserById = async (req, res, next) => {
    let users;
    const id = req.params.uid
    try{
        users = await User.findByPk(id);
    } catch (err) {
        const error = new HttpError('Something went wrong, coud not find any users', 500);
        return next(error);
    }

    if(!users)
    {
        const error =  new HttpError('Could not find any users', 404);
        return next(error);
    }
    res.status(200).json({users});
}

const register = async(req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        console.log(errors);
        const error =  new HttpError('Invalid Input! Pls check your data', 400);
        return next(error);
    }
    const { fullName, email, password } = req.body;

    let userEmail;
    try{
    userEmail = await User.findOne({
        where: {email: email }
    });
    } catch (err) {
        const error = new HttpError('Signup Fail!. Pls try again', 500);
        return next(error);
    }
    if(userEmail)
    {
        const error =  new HttpError('Mail exists already, Pls use another mail', 422);
        return next(error);
    }

    let hashedPassword;
    try {
        hashedPassword = await brcypt.hash(password, 9);
    } catch(err)
    {
        const error = new HttpError(
            'Could not create user, please try again.',
            500
          );
          return next(error);
    }
    
    const createdUser = {
        fullName,
        email,
        isAdmin: false,
        isConfirm: false,
        isLock: false,
        score: 0,
        password: hashedPassword
    };
    let Users;
    try {
        Users = await User.create(createdUser);
    } catch(err) {
        const error = new HttpError('Signing up failed, please try again later.',500);
        return next(error)
    } 

    let token;
    try {
        token = getToken(createdUser); 
    } catch (err) {
        const error = new HttpError('Signing up failed, please try again later.',500);
         return next(error)
    }
    const url = `${PORT}/api/user/confirmation/${token}`;
    transporter.sendMail({
        to: createdUser.email,
        subject: 'Confirm Email',
        html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
      });
    res.status(201).json({
        email: createdUser.email, isAdmin: createdUser.isAdmin, token:token
    });
};

const login = async(req,res,next) => {
    const {email, password} = req.body;
    console.log(email, password);
    let existingUser;

    try{
        existingUser = await User.findOne({
            where: {email: email }
        });
        console.log(existingUser);
    } catch (err) {
        const error = new HttpError('Login failed. Pls try again', 500);
        return next(error);
    }
    
    if(!existingUser) {
        const error = new HttpError('Email or Password is invalid', 401);
        return next(error);
    }
    if(existingUser.isConfirm === false || existingUser.isLock === true ) {
        const error = new HttpError('Your account is not confirm or was locked', 401);
        return next(error);
    }

    let isValidPassword;
    try {
        isValidPassword = await brcypt.compare(password, existingUser.password);
    } catch (err) {
        const error = new HttpError('Something is error. Pls try again', 401);
        return next(error);
    }

    if(!isValidPassword){
        const error = new HttpError('Email or Password is invalid', 401);
        return next(error);
    }

    let token;
    try {
        token = getToken(existingUser);
    } catch (err) {
        const error = new HttpError('Login failed, please try again later.',500);
        return next(error)
    }

    res.status(200).json({
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
        token: token
    })

}

const loginGoogle = async(req, res, next) => {
    let existingUser;
    existingUser = await User.findOne({
        where: { email: userProfile._json.email }
    });
    if (!existingUser) {
        const createdUser = {
            googleId: userProfile._json.sub,
            fullName: userProfile._json.name,
            email: userProfile._json.email,
            authType: 2,
            isAdmin: false,
            isConfirm: true,
            isLock: false,
            score: 0
        };
        let Users;
        try {
            Users = await User.create(createdUser);
        } catch (err) {
            const error = new HttpError('Signing up failed, please try again later.', 500);
            return next(error)
        }
        let token;
        try {
            token = getToken(createdUser);
        } catch (err) {
            const error = new HttpError('Login failed, please try again later.', 500);
            return next(error)
        }
        var responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'
        responseHTML = responseHTML.replace('%value%', JSON.stringify({
            user: existingUser,
            token: token
        }));
        res.status(200).send(responseHTML);
        // res.status(200).json({
        //     createdUser,
        //     token: token
        // })
    }
    else {
        if (existingUser.isConfirm === false || existingUser.isLock === true) {
            const error = new HttpError('Your account is not confirm or was locked', 401);
            return next(error);
        }

        let token;
        try {
            token = getToken(existingUser);
        } catch (err) {
            const error = new HttpError('Login failed, please try again later.', 500);
            return next(error)
        }
        var responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'
        responseHTML = responseHTML.replace('%value%', JSON.stringify({
            user: existingUser,
            token: token
        }));
        res.status(200).send(responseHTML);
        // res.status(200).json({
        //     existingUser,
        //     token: token
        // })
    }
}
const loginFacebook = async (req, res, next) =>{
    let existingUser;
    existingUser = await User.findOne({
        where: { email: userProfile._json.email }
    });
    if (!existingUser) {
        const createdUser = {
            googleId: userProfile._json.sub,
            fullName: userProfile._json.name,
            email: userProfile._json.email,
            authType: 2,
            isAdmin: false,
            isConfirm: true,
            isLock: false,
            score: 0
        };
        let Users;
        try {
            Users = await User.create(createdUser);
        } catch (err) {
            const error = new HttpError('Signing up failed, please try again later.', 500);
            return next(error)
        }
        let token;
        try {
            token = getToken(createdUser);
        } catch (err) {
            const error = new HttpError('Login failed, please try again later.', 500);
            return next(error)
        }
        var responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'
        responseHTML = responseHTML.replace('%value%', JSON.stringify({
            user: existingUser,
            token: token
        }));
        res.status(200).send(responseHTML);
        // res.status(200).json({
        //     createdUser,
        //     token: token
        // })
    }
    else {
        if (existingUser.isConfirm === false || existingUser.isLock === true) {
            const error = new HttpError('Your account is not confirm or was locked', 401);
            return next(error);
        }

        let token;
        try {
            token = getToken(existingUser);
        } catch (err) {
            const error = new HttpError('Login failed, please try again later.', 500);
            return next(error)
        }
        var responseHTML = '<html><head><title>Main</title></head><body></body><script>res = %value%; window.opener.postMessage(res, "*");window.close();</script></html>'
        responseHTML = responseHTML.replace('%value%', JSON.stringify({
            user: existingUser,
            token: token
        }));
        res.status(200).send(responseHTML);
        // res.status(200).json({
        //     existingUser,
        //     token: token
        // })
    }
}

const getMyUser = async (req, res, next) => {
    let users;
    try{
        users = await User.findOne({
            where: { email: req.userData.email}
        });
    } catch (err) {
        const error = new HttpError('You are not log in. Pls login', 500);
        return next(error);
    }

    if(!users)
    {
        const error =  new HttpError('Could not find any users', 404);
        return next(error);
    }
    res.status(200).json({users});
};

const getConfirmation = async(req, res, next) => {
    const token = req.params.token;
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const userData = {
        email: decodedToken.email
    };
    const updatedUser = {
        isConfirm: true
    };
    let users;
    try{
        users = await User.update(updatedUser,{
            where: { email: userData.email}
        });
    } catch (err) {
        const error = new HttpError('Your confirmation is out of time', 500);
        return next(error);
    }

    if(!users)
    {
        const error =  new HttpError('Could not find any users', 404);
        return next(error);
    }
    res.status(200).json({message: 'Success'});
}

const updateMyUser = async(req, res, next) => {
    let users;
    let userCurrent =  req.userData.email;
    console.log(req.body.birthday)
    try{
        users = await User.findOne({
            where: { email: userCurrent}
        });
    } catch (err) {
        const error = new HttpError('You are not log in. Pls login', 500);
        return next(error);
    }

    if(!users)
    {
        const error =  new HttpError('Could not find any users', 404);
        return next(error);
    }

    let image;
    if(typeof (req.file) !== "undefined")
    {
        image = req.file.path;
        
    }
    else image = null;
    if(image === null)
    {
        const userInfo = {
            fullName: req.body.fullName,
            phone: req.body.phone,
            address: req.body.address,
            gender: req.body.gender,
            birthday: req.body.birthday
        }
    
        let userUpdate;
        try{
            userUpdate = await User.update(userInfo, {
                where: { email: userCurrent}
            });
            console.log(userInfo);
            console.log(userUpdate);
        } catch (err)
        {
            console.log(err);
            const error = new HttpError('Update Fail', 500);
            return next(error);
        }
        if(!userUpdate)
        {
        const error =  new HttpError('Could not find any users', 404);
        return next(error);
        }
        res.status(200).json({userUpdate});
    }
    else 
    {
        const userInfo = {
            fullName: req.body.fullName,
            phone: req.body.phone,
            address: req.body.address,
            avatarPath: image,
            gender: req.body.gender,
            birthday: req.body.birthday,
        }
    
        let userUpdate;
        try{
            userUpdate = await User.update(userInfo, {
                where: { email: userCurrent}
            });
            console.log(userInfo);
            console.log(userUpdate);
        } catch (err)
        {
            console.log(err);
            const error = new HttpError('Update Fail', 500);
            return next(error);
        }
        if(!userUpdate)
    {
        const error =  new HttpError('Could not find any users', 404);
        return next(error);
    }
        res.status(200).json({userUpdate});
    }
    

    
}

const lockUser = async(req, res, next) => {
    const id = req.params.uid;
    console.log(id);
    const userLock = {
        isLock: true
    } 

    let users;
    try{
        users = await User.update(userLock,{
            where: { id: id } 
        });
        console.log(users);
    }
    catch (err) {
        const error = new HttpError('Something went wrong, can not lock', 500);
        return next(error);
    }
    if(!users)
    {
        const error =  new HttpError('Could not lock this user', 404);
        return next(error);
    }
    res.status(200).json({message: 'Update success'});
}

module.exports = {getUser, getMyUser,  register, login, getConfirmation, updateMyUser, getUserById, lockUser, loginGoogle, loginFacebook};