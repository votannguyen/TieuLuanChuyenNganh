const HttpError = require('../error-handle/http-error');  //dùng để giải quyết error
const models = require('../models'); //vì đang trong controllers nên phải ra ngoài thêm 1 chấm mới thấy đc models
const Category = models.Category;
const Brand = models.Brand;
const Product = models.Product;
const Group = models.Group;
const Promotion = models.Promotion;
const User = models.User;
const Order =  models.Order;
const OrderDetail = models.OrderDetail;
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
        const error = new HttpError('You are not log in. Pls login', 401 );
        return next(error);
    }
    
    if(!users)
    {
        const error =  new HttpError('Could not find any users', 404);
        return next(error);
    }
    if(req.body.promotionCode != undefined)
    {
        let promotion;
        try{
            promotion = await Promotion.findOne({
                where: {promotionCode: req.body.promotionCode}
            })
        } catch (err) {
            const error = new HttpError('This promotion code is wrong', 400);
            return next(error);
        }
        const orderCreated = {
            orderCode: req.body.orderCode,
            promotionCode: req.body.promotionCode,
            address: req.body.address,
            totalPrice: req.body.totalPrice,
            status: 1,          //trạng thái 1 (Đã đặt hàng)
            userId: users.id,
            fullName: req.body.fullName,
            phone: req.body.phone,
        }
        let createOrder;
            createOrder = await Order.create(orderCreated);
            res.status(200).json({createOrder})
    }
    else 
    {
        const orderCreated = {
            orderCode: req.body.orderCode,
            address: req.body.address,
            total: req.body.total,
            status: 1,          //trạng thái 1 (Đã đặt hàng)
            userId: users.id,
            fullName: req.body.fullName,
            phone: req.body.phone,
            address: req.body.address,
            totalPrice: req.body.totalPrice
        }
        let createOrder;
            createOrder = await Order.create(orderCreated);
            res.status(200).json({createOrder})
    }
    
}   

const updateOrderById = async(req, res, next) => {
    const orderId = req.params.orderId;
    console.log(orderId)
    const orderUpdated = {
        address: req.body.address,
        status: req.body.status,
        fullName: req.body.fullName,
        phone: req.body.phone,
    }
    console.log(orderUpdated)
    let updateOrder;
    updateOrder = await Order.update(orderUpdated, {
        where: { id: orderId }
    });

    if (req.body.status === 4)            //1: Đã đặt, 2: Đã Duyệt, 3:Đã Thanh Toán, 4: Đã Nhận Hàng
    {
        let orderById;
        orderById = await Order.findByPk(orderId);

        let userChange;
        const userUpdated = {
            score: orderById.totalPrice
        }
        userChange = await User.update(userUpdated,
            {
                where: {id: orderById.userId}
            });
    }
    res.status(200).json({ updateOrder })
    
}   

const addOrderDetail = async(req, res, next) => {
    let orderItem;
    const orderDetails = {
        orderId : req.body.orderId,
        unitAmount : req.body.unitAmount,
        unitPrice: req.body.unitPrice,
        productId : req.body.productId
    }
    console.log(orderDetails)
    try{
        orderItem = await OrderDetail.create(orderDetails)
        console.log(orderItem)
    } catch(err) {
        const error = new HttpError('There is system error. Pls try again', 500);
        return next(error);
    }
    res.status(200).json({orderItem});
}
module.exports = {addOrder, addOrderDetail, updateOrderById};