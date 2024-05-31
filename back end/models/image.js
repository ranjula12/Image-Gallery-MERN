const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
});

const ImageDetail = new mongoose.model("Image", imageSchema);
module.exports = ImageDetail;
