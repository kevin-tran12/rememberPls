const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const todoRouter = require('./todo.js')
router.use('/session', sessionRouter);

router.use('/users', usersRouter);
  
router.use('/todo', todoRouter)
module.exports = router;