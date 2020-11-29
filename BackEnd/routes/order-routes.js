const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');
const ordersControllers = require('../controllers/orders-controllers');
const {isAdmin, isAuth} = require('../middleware/check-auth');
const { route } = require('./brand-routes');

const router = express.Router();

router.use(isAuth);

router.post(
    '/addOrder',
    [   
       check('orderCode').not().isEmpty(),
       check('address').not().isEmpty(),
       check('total').not().isEmpty()
       
    ],
    ordersControllers.addOrder
 );

router.post(
    '/addOrderDetail',
    ordersControllers.addOrderDetail
)

router.use(isAdmin);

router.patch('/updateOrder/:orderId',ordersControllers.updateOrderById)

module.exports = router;