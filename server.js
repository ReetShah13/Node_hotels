const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Will Connect when the connectDB function is called
const {connectDB,closeDB} = require("./dbnew")
connectDB();

app.get('/',function(req,res){
    res.send('Hello World') 
})


const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})