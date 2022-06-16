const models = require('./models')
const express = require('express');
const app = express();
const indexRouter = require('./router/index');
const port = process.env.PORT ||8000; 


app.use(express.json());


 models.sequelize.sync().then(()=>{
    console.log(' Database is synced successfully')
 }).catch(err=>{
    console.log(err)
 })

app.use('/api',indexRouter);


app.listen(port,()=>{
    console.log('listening on port:'+ port);
});