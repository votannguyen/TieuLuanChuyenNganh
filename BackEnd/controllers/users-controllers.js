const HttpError = require('../error-handle/http-error');  //dùng để giải quyết error
const models = require('../models'); //vì đang trong controllers nên phải ra ngoài thêm 1 chấm mới thấy đc models
const User = models.User;

const brcypt = require('bcrypt')
const {v4: uuidv4} = require('uuid');
const { validationResult } = require('express-validator'); //lấy dc lỗi từ body validate
const jwt = require('jsonwebtoken')

const Sequelize = require('sequelize');
const Op = Sequelize.Op; 

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

const signup = async(req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        const error =  new HttpError('Invalid Input! Pls check your data', 400);
        return next(error);
    }
    const { fullName, email, phone, address, password } = req.body;

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
        userCode: uuidv4(),
        fullName,
        email,
        phone,
        address,
        avatarPath: req.file.path,
        isAdmin: false,
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
        token = jwt.sign(
            {userId: createdUser.id, email: createdUser.email},
            'ShoeShop_Key',
            {expiresIn: '1h'}
        );
    } catch (err) {
        const error = new HttpError('Signing up failed, please try again later.',500);
        return next(error)
    }

    res.status(201).json({
        message: 'Signup Successful', 
        email: createdUser.email,
        token: token
    });


};

const login = async(req,res,next) => {
    const {email, password} = req.body;
    let existingUser;

    try{
        existingUser = await User.findOne({
            where: {email: email }
        });
    } catch (err) {
        const error = new HttpError('Login failed. Pls try again', 500);
        return next(error);
    }
    
    if(!existingUser) {
        const error = new HttpError('Email or Password is invalid', 401);
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
        token = jwt.sign(
            {userId: existingUser.id, email: existingUser.email},
            'ShoeShop_Key',
            {expiresIn: '1h'}
        );
    } catch (err) {
        const error = new HttpError('Login failed, please try again later.',500);
        return next(error)
    }

    res.status(200).json({
        message: 'Login Success',
        userId: existingUser.id,
        email: existingUser.email,
        token: token
    })

}

const getUserById = async (req, res, next) => {
    const userId = req.params.uid;
    let users;
    try{
        users = await User.findByPk(userId);
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

/*const deleteUser = async(req,res,next) => {

}*/ 

exports.getUser = getUser;
exports.signup = signup;
exports.login = login;
exports.getUserById = getUserById;