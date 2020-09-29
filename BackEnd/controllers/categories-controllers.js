const HttpError = require('../error-handle/http-error');  //dùng để giải quyết error
const models = require('../models'); //vì đang trong controllers nên phải ra ngoài thêm 1 chấm mới thấy đc models
const Category = models.Category;
const { validationResult } = require('express-validator'); //lấy dc lỗi từ body validate
const Sequelize = require('sequelize');
const Op = Sequelize.Op; 

const getAllCategory = async (req, res, next) => {
    let categories;
    try{
        categories = await Category.findAll();
    } catch (err) {
        const error = new HttpError('Something went wrong, coud not find any category', 500);
        return next(error);
    }

    if(!categories)
    {
        const error =  new HttpError('Could not find any category', 404);
        return next(error);
    }
    res.status(200).json({categories});

};

const createCategory = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        console.log(errors);
        const error =  new HttpError('Invalid Input! Pls check your data', 400);
        return next(error);
    }
    const createdCategory = {
        name: req.body.name,
        imagePath: req.body.imagePath,
        summary: req.body.summary
      };
    let categories
    categories = await Category.create(createdCategory);
    res.status(200).json({categories});
     
};

const getCategoryById = async (req, res, next) => {
    const categoryId = req.params.cateid;
    let categories;
    try{
        categories = await Category.findByPk(categoryId);
    } catch (err) {
        const error = new HttpError('Something went wrong, coud not find any category', 500);
        return next(error);
    }

    if(!categories)
    {
        const error =  new HttpError('Could not find any category', 404);
        return next(error);
    }
    res.status(200).json({categories});

};

const deleteCategoryById = async (req, res, next) => {
    const categoryId = req.params.cateid;
    let categories;
    try{
        categories = await Category.destroy(
            {where: {id: categoryId} 
        });
    }
    catch (err) {
        const error = new HttpError('Something went wrong, can not delete', 500);
        return next(error);
    }
    if(!categories)
    {
        const error =  new HttpError('Could not find any category', 404);
        return next(error);
    }
    res.status(200).json({message: 'Deleted category:'});
    
}

const updateCategory = async (req, res, next) => {
    const categoryId = req.params.cateid;
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        console.log(errors);
        const error =  new HttpError('Invalid Input! Pls check your data', 400);
        return next(error);
    }
    const updatedCategory = {
        name: req.body.name,
        imagePath: req.body.imagePath,
        summary: req.body.summary
      };
    let categories
    categories = await Category.update(updatedCategory, {
        where: {id: categoryId}
    });
    res.status(200).json({categories: updatedCategory});
    
}

exports.getAllCategory = getAllCategory;
exports.getCategoryById = getCategoryById;
exports.createCategory = createCategory;
exports.deleteCategoryById = deleteCategoryById;
exports.updateCategory = updateCategory;