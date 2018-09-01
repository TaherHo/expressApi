const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port= process.env.PORT || 3031;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 

mongoose.connect("mongodb://localhost:27017/helloApi", { useNewUrlParser: true });

const welcome = express.Router();
const documentaion = express.Router();

welcome.get('/', (req, res) => {
    res.send("Hello from my second API");
});
app.use('/api', welcome);

documentaion.get('/', (req, res) => {
    res.json({"dataType" : "Documentaion:" ,
                "dataObject": "docu"});
});
app.use('/doc', documentaion);


app.listen(port, ()=> {
    console.log("New Server listen on port: " + port);
});