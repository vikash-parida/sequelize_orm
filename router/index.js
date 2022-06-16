const express = require('express');
const route = express.Router();



const userroute = require('./userroute');



route.use('/user',userroute);


module.exports = route;