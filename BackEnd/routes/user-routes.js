const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');
const usersControllers = require('../controllers/users-controllers');
const {isAdmin, isAuth} = require('../middleware/check-auth');

const router = express.Router();

router.post('/signup',
[
    check('fullName').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min:6})
], 
usersControllers.register);

router.post('/login', usersControllers.login);  // Cần thêm check


router.get('/', isAuth, isAdmin ,usersControllers.getUser);

router.get('/:uid', isAuth, isAdmin, usersControllers.getUserById);

router.get('/confirmation/:token', usersControllers.getConfirmation);

router.patch('/lock/:uid', isAuth, isAdmin, usersControllers.lockUser)

router.get('/myaccount', isAuth, usersControllers.getMyUser);

router.patch('/myaccount', isAuth ,usersControllers.updateMyUser);


module.exports = router;

