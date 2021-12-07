const express = require("express");
const app = express();
const dotenv=require("dotenv")
const errorMiddleware=require('./middleware/errors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Middleware for error
app.use(errorMiddleware)
const dataRoute =require('../backend/routes/dataRoutes')
app.use("/api/v1", dataRoute);


module.exports = app;