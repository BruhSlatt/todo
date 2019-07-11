const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user')

router.get('/user/signup', userController.register)

router.get('/user/login', userController.login)

// router.post('user/signup', userController)

// router.post('/user/login', userController)

router.get('/user/logout', userController.logout)

router.get('/user/profile', userController.profile)

module.exports = router;