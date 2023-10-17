const { Router } = require('express');
const router = new Router()
const problemController = require('../controllers/problemController')
const auth = require('../middlewares/auth')

router.get('/',auth,problemController.getAll)
router.get('/:id', problemController.getById)
router.post('/create', problemController.create)

module.exports = router