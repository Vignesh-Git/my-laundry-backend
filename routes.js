const express = require("express")
const app = express()

// Importing All Routes
const ping = require("./routes/ping")
const users = require("./routes/users")
app.use(ping)
app.use(users)


module.exports = app
