const { Router } = require('express');
const router = Router(); // Створюємо об'єкт Router
const userRouter = require('./userRouter');
const problemRouter = require('./problemRouter');
const usersSubmissionRouter = require('./sumbmissionRouter');

router.use('/user', userRouter);
router.use('/problem', problemRouter);
router.use('/submissions', usersSubmissionRouter);

module.exports = router;