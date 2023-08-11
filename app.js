const cors = require("cors"); 
const express = require("express"); 
require("dotenv").config(); 
 
const app = express(); 
 
// Middlewares here 
app.use(express.json()); 
app.options('*', cors());
 
// Routes here 
app.get('/', (req, res) => res.sendFile(__dirname + "/views/home/index.html"));

// Listen 
app.listen(8000, () => { 
  console.log("Server started at port 8000"); 
});