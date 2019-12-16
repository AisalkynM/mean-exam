const express = require("express"),
    app = express(),
    port = 8000,
    mongoose = require("mongoose"),
    path = require('path'),
    server = app.listen(port, () => console.log(`listening on port${port}`))

//SET UP API
app.use(express.json());

//set up ANGULAR
app.use(express.static( __dirname + '/public/dist/public' ));


require('./server/config/database')
require('./server/config/routes')(app)

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

