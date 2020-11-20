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

router.post('/login', usersControllers.login);  
router.get('/confirmation/:token', usersControllers.getConfirmation);

router.use(isAuth);

router.get('/myaccount', usersControllers.getMyUser);
router.patch(
'/myaccount',
fileUpload.single('avatarPath'),
usersControllers.updateMyUser);

router.use(isAdmin);

router.get('/',usersControllers.getUser);
router.get('/:uid', usersControllers.getUserById);
router.patch('/lock/:uid', usersControllers.lockUser);









module.exports = router;

