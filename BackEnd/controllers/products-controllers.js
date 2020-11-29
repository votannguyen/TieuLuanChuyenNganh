const HttpError = require('../error-handle/http-error');  //dùng để giải quyết error
const models = require('../models'); //vì đang trong controllers nên phải ra ngoài thêm 1 chấm mới thấy đc models
const {getAlias,decodeAlias} = require('../middleware/utilities')
const Product = models.Product;
const ProductSize = models.ProductSize;
const ProductImage = models.ProductImage;
const Group = models.Group;
const Brand = models.Brand;
const Category = models.Category;
const { validationResult } = require('express-validator'); //lấy dc lỗi từ body validate
const Sequelize = require('sequelize');
const Op = Sequelize.Op; 


const getAllProduct = async (req, res, next) => {
    let products;
    try {
        products = await Product.findAll(
            {
                include: [
                    {
                        model: Brand,
                        
                        
                    },
                    {
                        model: Category,
                        include:[{
                            model: Group
                        }]
                    },
                ],
            }
        );
        console.log(products)
    } catch (err) {
        const error = new HttpError('Something went wrong, coud not find any product', 500);
        let errReturn;
        errReturn = {
            fail: "SYSFF",
            error,
        };
        return next(errReturn);
    }

    if(!products)
    {
        const error =  new HttpError('Could not find any category', 404);
        let errReturn;
        errReturn = {
            fail: "USERNR",
            error,
        };
        return next(errReturn);
    }
    res.status(200).json({success: "SYSS01",products});
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
                    model: Category,
                    include: [{
                        model: Group
                    }]
                },
            ],
        });
    }
    catch (err) {
        const error = new HttpError('Something went wrong, coud not find any product', 500);
        let errReturn;
        errReturn = {
            fail: "SYSF01",
            error,
        };
        return next(errReturn);
    }
    if (!product) {
        const error = new HttpError("Could not find any product", 204);
        let errReturn;
        errReturn = {
            fail: "USERF01",
            error,
        };
        return next(errReturn);
    }
    res.status(200).json({success: "SYSS01",product});
}

const getProductImageByProductId = async (req,res,next) => {
    const productId = req.params.productId;
    let productImage;
    try {
        productImage = await ProductImage.findAll({
            where: {
                productId: productId
            }
        })
    } catch (err)
    {
        const error = new HttpError('Something went wrong, coud not find any image', 500);
        let errReturn;
        errReturn = {
            fail: "SYSF01",
            error,
        };
        return next(errReturn);
    }
    if (!productImage) {
        const error = new HttpError("Could not find any image", 204);
        let errReturn;
        errReturn = {
            fail: "USERF01",
            error,
        };
        return next(errReturn);
    }
    res.status(200).json({success: "SYSS01",productImage});
}

const getProductByAlias = async (req, res, next) => {
    const productAlias = req.params.productAlias;
    let product;
    try {
        product = await Product.findOne({
            where: {
                alias:  productAlias
            },
            include: [
                {
                    model: Brand
                   
                },
                {
                    model: Category,
                    include: [{
                        model: Group
                    }]
                },
            ],
        });
    }
    catch (err) {
        const error = new HttpError('Something went wrong, coud not find any product', 500);
        let errReturn;
        errReturn = {
            fail: "SYSF01",
            error,
        };
        return next(errReturn);
    }
    console.log(product)
    if (!product) {
        const error = new HttpError("Could not find any product", 204);
        let errReturn;
        errReturn = {
            fail: "USERF01",
            error,
        };
        return next(errReturn);
    }
    res.status(200).json({success: "SYSS01",product});
}

const createProduct = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        console.log(errors);
        const error =  new HttpError('Invalid Input! Pls check your data', 400);
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
        const createdProduct = {
            name: req.body.name,
            productCode: req.body.productCode,
            price: req.body.price,
            status: 1,
            amount: req.body.amount,
            description: req.body.description,
            color: req.body.color,
            brandId: req.body.brandId,
            categoryId: req.body.categoryId
          };
        let products;
        products = await Product.create(createdProduct);
        res.status(200).json({ success: "SYSS02",products});
    }
    else{
        const createdProduct = {
            name: req.body.name,
            productCode: req.body.productCode,
            price: req.body.price,
            status: 1,
            amount: req.body.amount,
            description: req.body.description,
            color: req.body.color,
            alias: getAlias(req.body.name),
            brandId: req.body.brandId,
            categoryId: req.body.categoryId
          };
        let products;
        products = await Product.create(createdProduct);
        res.status(200).json({ success: "SYSS02",products});
    }
    
}

const updateProductById = async (req, res, next) => {
    const productId = req.params.productId;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        const error = new HttpError("Invalid Input! Pls check your data", 400);
        let errReturn;
        errReturn = {
            fail: "SYSF03",
            error,
        };
        return next(errReturn);
    }
    //Kiểm tra có chèn ảnh ko
    let image;
    if (typeof req.file !== "undefined") {
        image = req.file.path;
    } else image = null;

    if (image === null) {
        const updatedProduct = {
            name: req.body.name,
            productCode: req.body.productCode,
            price: req.body.price,
            status: req.body.status,
            amount: req.body.amount,
            description: req.body.description,
            color: req.body.color,
            alias: getAlias(req.body.name),
            brandId: req.body.brandId,
            categoryId: req.body.categoryId
        };
        let products;
        products = await Product.update(updatedProduct, {
            where: { id: productId },
        });
        res.status(200).json({ success: "SYSS04" ,products: updatedProduct });
    } else {
        const updatedProduct = {
            name: req.body.name,
            productCode: req.body.productCode,
            price: req.body.price,
            status: req.body.status,
            amount: req.body.amount,
            description: req.body.description,
            color: req.body.color,
            alias: getAlias(req.body.name),
            brandId: req.body.brandId,
            categoryId: req.body.categoryId
        };
        let products;
        products = await Product.update(updatedProduct, {
            where: { id: productId },
        });
        res.status(200).json({ success: "SYSS04" ,products: updatedProduct });
    }
};


const createProductSize = async (req, res, next) => {
    let products;
    try{
        products = await Product.findByPk(req.body.productId);
    } catch (err) {
        const error = new HttpError('Could not find any Product', 404);
        return next(error);
    }
    let productReduce;
    productReduce = products.amount - req.body.productCount;
    if( productReduce < 0)
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

    const productAmountReduce = {
        amount : productReduce
    };
    let productUpdate;
    productUpdate = await Product.update(productAmountReduce,{
        where: {id: req.body.productId}
    });
    res.status(200).json({createdProductSize});
}

const createProductImage = async (req, res, next) => {
    const createdProductImage = {
        productId: req.body.productId,
        imagePath: req.file.path
    }
    let productImage;
    productImage = await ProductImage.create(createdProductImage);
    console.log(productImage)
    
    res.status(200).json({createdProductImage});
}

const updateProductImage = async (req, res, next) => {
    const productImageId = req.params.productImageId;
    const updatedImage = {
        imagePath: req.file.path
      };
    let productImage
    productImage = await ProductImage.update(updatedImage, {
        where: {id: productImageId}
    });
    res.status(200).json({success: "SYSS04",ProductImage: updatedImage});
}

module.exports = {getAllProduct, getProductById, createProduct, createProductSize, updateProductById, getProductByAlias, createProductImage, updateProductImage, getProductImageByProductId};