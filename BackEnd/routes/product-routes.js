const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');

const productsControllers = require('../controllers/products-controllers');

const router = express.Router();

router.get('/',productsControllers.getAllProduct);
router.get('/:productId', productsControllers.getProductById);

router.post(
    '/',
    fileUpload.single('imagePath'),
    [   
       check('name').not().isEmpty()
    ],
    productsControllers.createProduct
 );

module.exports = router;