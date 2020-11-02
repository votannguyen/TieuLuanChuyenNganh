const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');
const usersControllers = require('../controllers/users-controllers');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/signup',
[
    check('fullName').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min:6})
], 
usersControllers.register);

router.post('/login', usersControllers.login);  // Cần thêm check


router.get('/',usersControllers.getUser);

router.get('/confirmation/:token', usersControllers.getConfirmation);


router.use(checkAuth);

router.get('/myaccount', usersControllers.getMyUser);

router.patch('/myaccount',usersControllers.updateUser);



module.exports = router;

