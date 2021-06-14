var express = require('express')
var app = express()
app.use(express.json());

//middleware
app.use('/middleware', function (req, res, next) {
  console.log('Hello middleware');
  next();
}, function (req, res, next){
  res.send("Hello world")
});

