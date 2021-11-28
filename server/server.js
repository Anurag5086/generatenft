const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// require routes
const routes = require("./routes");

//MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));

// config routes
app.use("/api", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Sever Started on Port 5000!"));
