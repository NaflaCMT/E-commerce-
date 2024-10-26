const ErrorHandler = require("../Utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.message = err.message || "Internal Server Error";

  //duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }
  
  // Wrong jwt error
  if (err.name === "JsonWebTokenError" ) { 
    const message = `Your url is invalid`;
    err = new ErrorHandler(message, 400);
  }

  //jwt expired
  if (err.name === "TokenExpiredError") {
    const message = `Your url is Expired`;
    err = new ErrorHandler(message, 400);
    res.status(err.statuscode).json({
      success: false,
      message: err.message,
    });
  }
};
