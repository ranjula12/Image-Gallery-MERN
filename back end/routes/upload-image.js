const express = require("express");

const ImageDetail = require("../models/image");

const router = express.Router();

router.use(express.json());

router.post("/upload", async (req, res) => {
  console.log(req.body.image);
  // res.send({ message: "success" });
  try {
    const image1 = new ImageDetail({
      image: req.body.image,
    });
    console.log(image1);
    await image1.save();
    res.send({ message: "image upload successfully ", success: true });
  } catch (error) {
    console.log(error);
  }
});

router.get("/get-image", async (req, res) => {
  try {
    const image = await ImageDetail.find({});
    res.send({ message: "all images are here", data: image });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedImage = await ImageDetail.findByIdAndDelete(id);

    if (!deletedImage) {
      return res
        .status(404)
        .send({ message: "Image not found", success: false });
    }

    res.send({ message: "Image deleted successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error deleting image", success: false });
  }
});
module.exports = router;
