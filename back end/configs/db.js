const mongoose = require("mongoose");

const connectionDB = async () => {
  return mongoose
    .connect("mongodb://127.0.0.1/image_gallery")
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectionDB;
