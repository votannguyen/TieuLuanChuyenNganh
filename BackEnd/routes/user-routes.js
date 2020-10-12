const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');

const usersControllers = require('../controllers/users-controllers');


const router = express.Router();

router.get('/',usersControllers.getUser);

router.get('/:uid', usersControllers.getUserById);

router.post('/signup',
// fileUpload.single('avatarPath'),
[
    check('fullName').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min:6})
], 
usersControllers.signup);

router.post('/login', usersControllers.login);





module.exports = router;