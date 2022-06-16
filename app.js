const models = require('./models')
const express = require('express');
const app = express();

const port = process.env.PORT ||8000; 


 models.sequelize.authenticate().then(()=>{
    console.log(' Database is synced successfully')
 }).catch(err=>{
    console.log(err)
 })
app.use('/',(req, res, )=>{
   res.send("welcome");
})

app.listen(port,()=>{
    console.log('listening on port:'+ port);
});