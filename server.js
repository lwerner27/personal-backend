const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const routes = require('./routes');

const PORT = process.env.PORT || 5000
const app = express()

// const corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(routes)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    if (req.method === 'OPTIONS') {
        res.header('Acces-Control-Allow-Methods', "PUT, POST, PATCH, GET, DELETE")
        return res.status(200).json({})
    }
    next()
})

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/TestAuth', {
        useNewUrlParser: true
    }
);


app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT)
})