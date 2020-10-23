const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');


const categoriesControllers = require('../controllers/categories-controllers');

const router = express.Router();

router.get('/',categoriesControllers.getAllCategory );

router.get('/:alias', categoriesControllers.getCategoryById);

router.post(
    '/',
    fileUpload.single('imagePath'),
    [   
       check('name').not().isEmpty()
    ],
    categoriesControllers.createCategory
 );

router.delete('/:alias', categoriesControllers.deleteCategoryById);

router.patch(
   '/:alias',
   fileUpload.single('imagePath'),
   [
      check('name').not().isEmpty(),
      check('summary').not().isEmpty()
   ],
   categoriesControllers.updateCategory
);

module.exports = router;