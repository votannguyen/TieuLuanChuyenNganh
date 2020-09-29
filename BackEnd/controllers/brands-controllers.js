const HttpError = require('../error-handle/http-error');  //dùng để giải quyết error
const models = require('../models'); //vì đang trong controllers nên phải ra ngoài thêm 1 chấm mới thấy đc models
const Brand = models.Brand;
const { validationResult } = require('express-validator'); //lấy dc lỗi từ body validate
const Sequelize = require('sequelize');
const Op = Sequelize.Op; 

const getAllBrand = async (req, res, next) => {
    let brands;
    try{
        brands = await Brand.findAll();
    } catch (err) {
        const error = new HttpError('Something went wrong, coud not find any Brand', 500);
        return next(error);
    }

    if(!brands)
    {
        const error =  new HttpError('Could not find any Brand', 404);
        return next(error);
    }
    res.status(200).json({brands});

};

const createBrand = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        console.log(errors);
        const error =  new HttpError('Invalid Input! Pls check your data', 400);
        return next(error);
    }
    const createdBrand = {
        name: req.body.name,
        imagePath: req.body.imagePath,
        summary: req.body.summary
      };
    let brands
    brands = await Brand.create(createdBrand);
    res.status(200).json({brands});
     
};

const getBrandById = async (req, res, next) => {
    const BrandId = req.params.brandid;
    let brands;
    try{
        brands = await Brand.findByPk(BrandId);
    } catch (err) {
        const error = new HttpError('Something went wrong, coud not find any Brand', 500);
        return next(error);
    }

    if(!brands)
    {
        const error =  new HttpError('Could not find any Brand', 404);
        return next(error);
    }
    res.status(200).json({brands});

};

const deleteBrandById = async (req, res, next) => {
    const BrandId = req.params.brandid;
    let brands;
    try{
        brands = await Brand.destroy(
            {where: {id: BrandId} 
        });
    }
    catch (err) {
        const error = new HttpError('Something went wrong, can not delete', 500);
        return next(error);
    }
    if(!brands)
    {
        const error =  new HttpError('Could not find any Brand', 404);
        return next(error);
    }
    res.status(200).json({message: 'Deleted Brand:'});
    
}

const updateBrand = async (req, res, next) => {
    const BrandId = req.params.brandid;
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        console.log(errors);
        const error =  new HttpError('Invalid Input! Pls check your data', 400);
        return next(error);
    }
    const updatedBrand = {
        name: req.body.name,
        imagePath: req.body.imagePath,
        summary: req.body.summary
      };
    let brands
    brands = await Brand.update(updatedBrand, {
        where: {id: BrandId}
    });
    res.status(200).json({brands: updatedBrand});
    
}

exports.getAllBrand = getAllBrand;
exports.getBrandById = getBrandById;
exports.createBrand = createBrand;
exports.deleteBrandById = deleteBrandById;
exports.updateBrand = updateBrand;