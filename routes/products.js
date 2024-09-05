const router = require('express').Router();

 const product = require('../controllers/products');

router.get('/', product.list);
router.post('/', product.create);
router.put('/:id', product.update);
router.delete('/:id', product.delete);

module.exports = router;