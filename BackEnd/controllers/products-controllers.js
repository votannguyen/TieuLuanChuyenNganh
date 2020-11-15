const HttpError = require('../error-handle/http-error');  //dùng để giải quyết error
const models = require('../models'); //vì đang trong controllers nên phải ra ngoài thêm 1 chấm mới thấy đc models

const Product = models.Product;
const ProductSize = models.ProductSize;
const Group = models.Group;
const { validationResult } = require('express-validator'); //lấy dc lỗi từ body validate
const Sequelize = require('sequelize');
const Op = Sequelize.Op; 


const getAlias = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str.toLowerCase().replace(/ /g, "-");
}

const getAllProduct = async (req, res, next) => {
    let products;
    try {
        products = await Product.findAll(
            {
                include: [
                    {
                        model: Brand
                    },
                    {
                        model: Category
                    },
                    {
                        model: Group
                    }
                ],
            }
        );
        
    } catch (err) {
        const error = new HttpError('Something went wrong, coud not find any product', 500);
        return next(error);;
    }

    if(!products)
    {
        const error =  new HttpError('Could not find any category', 404);
        return next(error);
    }
    res.status(200).json({products});
}

const getProductById = async (req, res, next) => {
    const productId = req.params.productId;
    let product;
    try {
        product = await Product.findOne({
            where: {
                id: productId
            },
            include: [
                {
                    model: Brand
                },
                {
                    model: Category
                },
                {
                    model: Group
                }
            ],
        });
    }
    catch (err) {
        const error = new HttpError('Something went wrong, coud not find any product', 500);
        return next(error);
    }
    res.status(200).json({product});
}

const createProduct = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        console.log(errors);
        const error =  new HttpError('Invalid Input! Pls check your data', 400);
        return next(error);
    }
    const createdProduct = {
        name: req.body.name,
        productCode: req.body.productCode,
        price: req.body.price,
        imagePath: req.file.path,
        state: "Available",
        amount: req.body.amount,
        description: req.body.description,
        color: req.body.color,
        alias: getAlias(req.body.name),
        brandId: req.body.brandId,
        categoryId: req.body.categoryId,
        groupId: req.body.groupId
      };
    let products;
    products = await Product.create(createdProduct);
    res.status(200).json({products});
}

const createProductSize = async (req, res, next) => {
    let products;
    try{
        products = await Product.findOne({
        where: {id: req.body.productId}
    });
    } catch (err) {
        const error = new HttpError('Could not find any Product', 404);
        return next(error);
    }

    if(products.amount - req.body.productCount < 0)
    {
        const error = new HttpError('The product is out of sources', 400);
        return next(error);
    }
    const createdProductSize = {
        productCount: req.body.productCount,
        productId: req.body.productId,
        sizeId: req.body.sizeId
    }
    let productSize;
    productSize = await ProductSize.create(createdProductSize);
    res.status(200).json({createdProductSize});
}
module.exports = {getAllProduct, getProductById, createProduct, createProductSize};