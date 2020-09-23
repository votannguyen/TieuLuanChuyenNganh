const express = require('express');
const { check } = require('express-validator');

const categoriesControllers = require('../controllers/categories-controllers.js');
const brandsControllers = require('../controllers/brands-controllers');

const router = express.Router();

router.get('/category', categoriesControllers.getAllCategory );

router.get('/category/:cateid', categoriesControllers.getCategoryById);

router.post(
    '/category/create',
    [   
       check('name').not().isEmpty()
    ],
    categoriesControllers.createCategory
 );

router.delete('/category/:cateid/delete', categoriesControllers.deleteCategoryById);

router.patch(
   '/category/:cateid/update',
   [
      check('name').not().isEmpty(),
      check('summary').not().isEmpty()
   ],
   categoriesControllers.updateCategory
);

router.get('/brand', brandsControllers.getAllBrand );

router.get('/brand/:brandid', brandsControllers.getBrandById);

router.post(
    '/brand/create',
    [   
       check('name').not().isEmpty()
    ],
    brandsControllers.createBrand
 );

router.delete('/brand/:brandid/delete', brandsControllers.deleteBrandById);

router.patch(
   '/brand/:brandid/update',
   [
      check('name').not().isEmpty(),
      check('summary').not().isEmpty()
   ],
   brandsControllers.updateBrand
);


module.exports = router;