const express = require('express');
const { check } = require('express-validator');
const fileUpload = require('../middleware/file-upload');

const brandsControllers = require('../controllers/brands-controllers');

const router = express.Router();

router.get('/', brandsControllers.getAllBrand );

router.get('/:brandName', brandsControllers.getBrandById);

router.post(
    '/',
    fileUpload.single('imagePath'),
    [   
       check('name').not().isEmpty()
    ],
    brandsControllers.createBrand
 );

router.delete('/:brandName', brandsControllers.deleteBrandById);

router.patch(
   '/:brandName/',
   fileUpload.single('imagePath'),
   [
      check('name').not().isEmpty(),
      check('summary').not().isEmpty()
   ],
   brandsControllers.updateBrand
);

module.exports = router;