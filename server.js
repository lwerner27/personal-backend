const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const routes = require('./routes');

const PORT = process.env.PORT || 8080
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/TestAuth', {
        useNewUrlParser: true
    }
);


app.listen(PORT, () => {
    console.log("The server is listening on port " + 8080)
})