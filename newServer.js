const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port= process.env.PORT || 3030;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 

// mongoose.connect("mongodb://localhost:27017/helloApi");

var router = express.Router();
app.use('/api', router);

app.get('/', (req, res) => {
    res.send("Hello from my second API");
    console.log(port);
});
app.listen(port, ()=> {
    console.log("New Server listen on port: " + port);
});