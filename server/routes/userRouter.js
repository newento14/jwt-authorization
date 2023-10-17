const { Router } = require('express');
const router = new Router()
const userController = require('../controllers/userController')
const {body} = require('express-validator')


router.get('/refresh', userController.refresh)
router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 4, max: 64}),
    body('username').isLength({min: 4, max: 64}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

module.exports = router