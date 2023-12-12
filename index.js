const express = require('express');
const app = express();
const router = express.Router();
const bodyParser= require('body-parser');
const indexrouter = require('./routes/indexrouter')

var body=app.use(bodyParser.urlencoded({extended: true}));





app.use("/",indexrouter);
app.set('view engine', 'ejs');



app.listen(8000,()=>{
    console.log("Server Started At 8000");
})

