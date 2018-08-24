var express = require('express');
var app = express();

const port = 3000;
let nr = 0;

app.get('/', (req, res)=> {
  res.send("Hello from my first API");
  console.log("new req Nr.:" + nr);
  nr++;
})

app.listen(port, ()=> {
  console.log('server listening on port: ' + port)
});
