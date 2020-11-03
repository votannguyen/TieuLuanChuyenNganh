const HttpError = require('../error-handle/http-error');  //dùng để giải quyết error
const models = require('../models'); //vì đang trong controllers nên phải ra ngoài thêm 1 chấm mới thấy đc models
const Group = models.Group;
const { validationResult } = require('express-validator'); //lấy dc lỗi từ body validate
const Sequelize = require('sequelize');
const Op = Sequelize.Op; 

const getAllGroup = async (req, res, next) => {
    let Groups;
    try{
        Groups = await Group.findAll();
    } catch (err) {
        const error = new HttpError('Something went wrong, coud not find any Group', 500);
        return next(error);
    }

    if(!Groups)
    {
        const error =  new HttpError('Could not find any Group', 404);
        return next(error);
    }
    res.status(200).json({Groups});

};

const createGroup = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        console.log(errors);
        const error =  new HttpError('Invalid Input! Pls check your data', 400);
        return next(error);
    }
    const createdGroup = {
        name: req.body.name,
        summary: req.body.summary
      };
    let Groups
    Groups = await Group.create(createdGroup);
    res.status(200).json({Groups});
     
};

const getGroupByName = async (req, res, next) => {
    const name = req.params.groupName;
    let Groups;
    try{
        Groups = await Group.findOne({
            where: {
                name: name
            }
        });
    } catch (err) {
        const error = new HttpError('Something went wrong, coud not find any Group', 500);
        return next(error);
    }

    if(!Groups)
    {
        const error =  new HttpError('Could not find any Group', 404);
        return next(error);
    }
    res.status(200).json({Groups});

};

const deleteGroupByName = async (req, res, next) => {
    const name = req.params.groupName;
    let Groups;
    try{
        Groups = await Group.destroy(
            {where: {name: name} 
        });
    }
    catch (err) {
        const error = new HttpError('Something went wrong, can not delete', 500);
        return next(error);
    }
    if(!Groups)
    {
        const error =  new HttpError('Could not find any Group', 404);
        return next(error);
    }
    res.status(200).json({message: 'Deleted Group:'});
    
}

const updateGroup = async (req, res, next) => {
    const groupName = req.params.groupName;
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        console.log(errors);
        const error =  new HttpError('Invalid Input! Pls check your data', 400);
        return next(error);
    }
    const updatedGroup = {
        name: req.body.name,
        summary: req.body.summary
      };
    let Groups
    Groups = await Group.update(updatedGroup, {
        where: {name: groupName}
    });
    res.status(200).json({Groups: updatedGroup});
    
}

module.exports = { getAllGroup, getGroupByName, createGroup, updateGroup, deleteGroupByName};