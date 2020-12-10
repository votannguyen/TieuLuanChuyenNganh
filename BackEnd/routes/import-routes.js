const express = require('express');
const { check } = require('express-validator');
const importsControllers = require('../controllers/imports-controller');
const {isAdmin, isAuth} = require('../middleware/check-auth');

const router = express.Router();

router.post(
    '/addImport',
    importsControllers.addImport
);

router.post(
    '/addImportDetail',
    importsControllers.addImportDetail 
);

router.get('/',importsControllers.getAllImport);

router.get('/:productId',importsControllers.getImportByProductId)
module.exports = router;