const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT,()=>{
    console.log('Server is running on port 3000');
})