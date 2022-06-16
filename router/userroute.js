const express = require('express');
const route = express.Router();


//require controller file
const user = require('../controller/userController')


// user controller file
route.get('/',user.readUser);
route.post('/',user.AddUser);
route.put('/:id',user.updataUser);


module.exports = route;