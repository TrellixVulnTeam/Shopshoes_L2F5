const express = require('express')
const router = express.Router()

const cartController = require('../controller/cartController')


router.get('/', cartController.index)

router.post('/add_to_cart', cartController.addcart)




module.exports = router