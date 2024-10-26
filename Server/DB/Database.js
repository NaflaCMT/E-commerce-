const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URL).then((data) => {
    console.log(`mongo Db Connected to ${data.connection.host}`);
  });
};
module.exports = connectDatabase;
