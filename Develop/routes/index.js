const router = require('express').Router();

const getRouter = require('./Get*');
const notesRouter = require('./Notes');
const postRouter = require('./Post');

router.use('./Get*.js', tipsRouter);
router.use('./Notes.js', notesRouter);
router.use('./Post.js', postRouter);

module.exports = router;
