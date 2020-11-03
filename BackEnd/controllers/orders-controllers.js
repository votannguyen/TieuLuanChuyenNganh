const HttpError = require('../error-handle/http-error');  //dùng để giải quyết error
const models = require('../models'); //vì đang trong controllers nên phải ra ngoài thêm 1 chấm mới thấy đc models
const Category = models.Category;
const Brand = models.Brand;
const Product = models.Product;
const Group = models.Group;
const { validationResult } = require('express-validator'); //lấy dc lỗi từ body validate
const Sequelize = require('sequelize');
const Op = Sequelize.Op; 




const addOrderAndDetail = async(req, res, next) => {
    let users;
    let userCurrent =  req.userData.email;
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

    const order = {
        orderCode: req.body.name,
        productCode: req.body.productCode,
        price: req.body.price,
        imagePath: req.file.path,
        availability: req.body.availability,
        amount: req.body.amount,
        description: req.body.description,
        color: req.body.color,
        alias: getAlias(req.body.name),
        brandId: req.body.brandId,
        categoryId: req.body.categoryId,
        groupId: req.body.groupId
    }
}
module.exports = {addOrder};