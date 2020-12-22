const express = require('express');
const router = express.Router();

const ProductController = require('../controller/ProductController');
const ProductValidation = require('../middlewares/ProductValidation');


router.post('/', ProductValidation, ProductController.create);

router.put('/:id', ProductValidation, ProductController.update);
router.put('/:id/:done', ProductController.done);

router.delete('/:id', ProductController.delete);

router.get('/:id', ProductController.show);
router.get('/list/:type', ProductController.list);

module.exports = router;
