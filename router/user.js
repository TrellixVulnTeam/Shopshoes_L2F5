const express = require('express')
const { JsonWebTokenError } = require('jsonwebtoken')
const { checkcustom } = require('../controller/userController')
const router = express.Router()

const userController = require('../controller/userController')



router.get('/register', userController.index)
router.post('/register/store', userController.store)
router.get('/logout', userController.logout)
router.get('/login', userController.show)
router.post('/login', userController.login)
router.get('/profile/:id', userController.profile)

router.get('/private', userController.private1, userController.private2)

module.exports = router