const router = require('express').Router();

const notesRouter = require('./Notes');
const postRouter = require('./Post');

router.use('/note', notesRouter);
router.use('/post', postRouter);

module.exports = router;
