const express = require("express")

const app = express()

const port = process.env.PORT || 5300

app.listen(port, () => {
    console.log("Server listening on port: " + port)
})