const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL);

module.exports = mongoose.connection;
// || "mongodb://127.0.0.1:27017/googlebooks"
