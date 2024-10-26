// const { connect } = require("mongoose");
// const app = require("./App");
// const connectDatabase = require("./DB/Database");

// //handling uncaught exception
// process.on("uncaughtException", (err) => {
//   console.log("hello");

//   console.log(`Error:${err.message}`);
//   console.log("shutting down the server for handling uncaught exception");
// });

// //config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({
//     path: "../Server/config/.env",
//   });
// }

// //create server

// const server = app.listen(process.env.PORT, () => {
//   console.log(`server is running on http://localhost:${process.env.PORT}`);
// });

// //unhandled promise rejection

// process.on("unhandledRejection", (err) => {
//   console.log(`Shutting down the server for ${err.message}`);
//   console.log("Shutting down the server for unhandled promise Rejection");

//   server.close(() => {
//     process.exit(1);
//   });
// });

// //connect Db
// connectDatabase();


const app = require("./App");
const connectDatabse = require("./DB/Database");

//handling uncaught error

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server for handling uncaught exception");
});

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//connect DB

connectDatabse();

//create server

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
console.log(process.env.PORT);

//unhandled promise rejection

process.on("unhandledRejection", (err) => {
  console.log(  `Shutting down the server for ${err.message}`);
  console.log(`Shutting down the server for unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});