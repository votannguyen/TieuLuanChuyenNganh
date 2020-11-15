const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');
const ordersControllers = require('../controllers/orders-controllers');
const {isAdmin, isAuth} = require('../middleware/check-auth');

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
    [
        check('amount').not().isEmpty(),
        check('price').not().isEmpty(),
    ],
    ordersControllers.addOrderDetail
)

module.exports = router;