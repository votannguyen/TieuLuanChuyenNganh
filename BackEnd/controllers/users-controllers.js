const HttpError = require('../error-handle/http-error');  //dùng để giải quyết error
const models = require('../models'); //vì đang trong controllers nên phải ra ngoài thêm 1 chấm mới thấy đc models
const User = models.User;
const { validationResult } = require('express-validator'); //lấy dc lỗi từ body validate
const Sequelize = require('sequelize');
const Op = Sequelize.Op; 

const getUser = async (req, res, next) => {
    let users;
    try{
        users = await User.findAll();
    } catch (err) {
        const error = new HttpError('Something went wrong, coud not find any category', 500);
        return next(error);
    }

    if(!users)
    {
        const error =  new HttpError('Could not find any category', 404);
        return next(error);
    }
    res.status(200).json({users});

};