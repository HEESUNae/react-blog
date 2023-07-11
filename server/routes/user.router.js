const express = require('express');
const userController = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.post('/add', userController.createUser);
userRouter.post('/login', userController.loginUser);

module.exports = userRouter;
