const { signupController, loginController, passwordController } = require('../Controller.js/controllers');

const userRoute =require('express').Router();

userRoute.get('/signup',signupController)
userRoute.get('/login',loginController)
userRoute.get('/forgetpassword',passwordController)

module.exports=userRoute;