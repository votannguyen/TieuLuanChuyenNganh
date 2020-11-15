const HttpError = require('../error-handle/http-error');  //dùng để giải quyết error
const models = require('../models'); //vì đang trong controllers nên phải ra ngoài thêm 1 chấm mới thấy đc models
const Category = models.Category;
const Brand = models.Brand;
const Product = models.Product;
const Group = models.Group;
const User = models.User;
const Order =  models.Order;
const OrderDetail = models.orderDetail;
const { validationResult } = require('express-validator'); //lấy dc lỗi từ body validate
const Sequelize = require('sequelize');
const Op = Sequelize.Op; 


const addOrder = async(req, res, next) => {
    let users;
    let userCurrent =  req.userData.email;
    console.log(userCurrent);
    try{
        users = await User.findOne({
            where: { email: userCurrent}
        });
        console.log(users);
    } catch (err) {
        const error = new HttpError('You are not log in. Pls login', 500);
        return next(error);
    }
    
    if(!users)
    {
        const error =  new HttpError('Could not find any users', 404);
        return next(error);
    }
    console.log(users.id)
    const orderCreated = {
        orderCode: req.body.orderCode,
        promotion: req.body.productCode,
        address: req.body.address,
        total: req.body.total,
        state: "Chờ xử lý",
        userId: users.id,
    }
    let createOrder;
    try{
        createOrder = await Order.create(orderCreated);
    } catch (err) {
        const error = new HttpError('There is some error', 500);
        return next(error);
    }

    if(!createOrder)
    {
        const error =  new HttpError('Could not find any Order', 404);
        return next(error);
    }

    res.status(200).json({orderCreated})

}   

const addOrderDetail = async(req, res, next) => {
    let orderItem;
    const orderDetails = {
        orderId : req.body.orderId,
        amount : req.body.amount,
        price: req.body.price,
        orderId : req.body.orderId,
        productId : req.body.productId
    }
    try{
        orderItem = await OrderDetail.create(orderDetails)
    } catch(err) {
        const error = new HttpError('There is some error', 500);
        return next(error);
    }
    res.status(200).json({orderDetails});
}
module.exports = {addOrder, addOrderDetail};