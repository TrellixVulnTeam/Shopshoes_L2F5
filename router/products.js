const express = require('express')
const router = express.Router()

const productsController = require('../controller/productsController')

// productsController.index
router.get('/NSX/:NSX', productsController.nsx)
router.get('/TenLoai/:TenLoai', productsController.show)
    // router.get('/search', productsController.search)
router.get('/', productsController.index)

module.exports = router