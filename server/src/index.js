require('dotenv').config();
require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");


const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.error("Failed to connect to database", err));

  app.get("/", requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
  });
  
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });