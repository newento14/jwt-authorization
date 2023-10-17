const { Router } = require('express');
const router = new Router()
const submissionsController = require('../controllers/submissionController')


router.get('/',submissionsController.getAll)
router.get('/:id', submissionsController.getById)
router.post('/submission', submissionsController.addSubmission)

module.exports = router