const products = require('../controllers/products');

const router =  require('express').Router();

const products = require('./products')
router.use('/', products)

module.exports = router;