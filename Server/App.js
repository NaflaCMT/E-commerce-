// const express = require("express");
// const ErrorHandler = require("./Middlewares/Error");
// const app = express();
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");

// app.use(express.json());
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

// //routes import
// const user=require("./Controllers/user")
// app.use("/api/v1",user)

// //Error handler middleware
// app.use(ErrorHandler)

// module.exports = app;

const express = require("express");
const ErrorHandler = require("./Middlewares/Error");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "Config/.env",
  });
}
const user = require("./Controllers/user");
app.use("/api/v2", user);
//for error handling
app.use(ErrorHandler);

module.exports = app;
