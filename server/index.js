const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const morgan = require("morgan");
const expressValidator = require("express-validator");

// import routes
const authRoutes = require("./routes/auth");

// database
mongoose
  .connect(process.env.DATABASE, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(expressValidator());

// Routes
app.use("/api", authRoutes);

app.listen(4000, () => console.log("server running"));
