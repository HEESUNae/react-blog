const express = require('express');
const postContoller = require('../controllers/post.controller');
const postRouter = express.Router();

postRouter.post('/add', postContoller.createPost);
postRouter.get('/list', postContoller.readPost);

module.exports = postRouter;
