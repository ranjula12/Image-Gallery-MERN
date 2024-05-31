import React, { useEffect, useState } from "react";
import "./Upload.css";
import CustomSL from "./CustomSlider";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImage64, setSelectedImage64] = useState();

  const [allImage, setAllImage] = useState([]);

  const fetchData = async () => {
    const result = await fetch("http://localhost:8000/api/get-image");
    const res = await result.json();

    setAllImage(res.data);
  };

  const imagebase64 = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const data = await new Promise((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (err) => {
        reject(err);
      };
    });
    return data;
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedImage) {
      const image = await imagebase64(selectedImage);
      await setSelectedImage64(image);
      // console.log(selectedImage64);

      const result = await fetch("http://localhost:8000/api/upload", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ image: selectedImage64 }),
      });

      const res = await result.json();

      if (res.success) {
        alert("Upload successful");
        setSelectedImage(null);
        setSelectedImage64(null);
        fetchData();
      }
      console.log(res);
    } else {
      alert("Please select an image first.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (index) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/delete/${index}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("image deleted!");
        fetchData();
      } else {
        console.error("Error deleting item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <div className="image-upload-container">
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {selectedImage && (
            <div className="image-preview">
              <img
                src={URL.createObjectURL(selectedImage).toString()}
                alt="Selected"
              />
            </div>
          )}

          <button type="submit">Upload Image</button>
        </form>
      </div>
      <>
        {allImage.length !== 0 ? (
          <CustomSL slides={allImage} onDelete={handleDelete} />
        ) : (
          <h2 style={{ textAlign: "center" }}>No Images...</h2>
        )}
      </>
    </>
  );
};

export default ImageUpload;
