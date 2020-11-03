const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');

const groupsController = require('../controllers/groups-controllers');

const router = express.Router();

router.get('/', groupsController.getAllGroup );

router.get('/:groupName', groupsController.getGroupByName);

router.post(
    '/',
    [   
       check('name').not().isEmpty()
    ],
    groupsController.createGroup
 );

router.delete('/:groupName', groupsController.deleteGroupByName);



module.exports = router;