import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";

const CMS = () => {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageUpload = (e) => {
    console.log("hie", e.target.value);
    setImage(e.target.files[0]);
    console.log("file", e.target.files[0]);
  };

  const handlePreviewImage = () => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(image);
    }
  };

  const [profilePic, setProfilePic] = useState(null);
  const [images, setImages] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [fileInput, setFileInput] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/piccrud/");
      setImages(response.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleImageDelete = async (id) => {
    try {
      await axios.delete(`/api/images/${id}`);
      fetchImages();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleImageChange = (e) => {
    console.log("hies");
    console.log(e.target.files[0]);
    setSelectedImage(e.target.files[0]);
  };

  //   const handleImageUpload = async () => {
  //     if (!selectedImage) return;

  //     const formData = new FormData();
  //     formData.append('image', selectedImage);

  //     try {
  //       await axios.post('/api/images', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });

  //       fetchImages();
  //       setSelectedImage(null);
  //       setFileInput(null);
  //     } catch (error) {
  //       console.error('Error uploading image:', error);
  //     }
  //   };

  const handleImageReplace = async (id) => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      await axios.put(`http://127.0.0.1:8000/api/piccrud/1/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      fetchImages();
      setSelectedImage(null);
      setFileInput(null);
    } catch (error) {
      fetchImages();
      console.error("Error replacing image:", error);
    }
  };

  useEffect(() => {
    // axios.get('http://localhost:8000/api/images/')
    axios
      .get("http://127.0.0.1:8000/api/piccrud/")
      .then((response) => {
        console.log(response.data);
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
      });
  }, []);

  //   const handleFileUpload = (acceptedFiles) => {
  //     setProfilePic(acceptedFiles[0]);
  //   };

  //   const handleSubmit = async () => {
  //     const formData = new FormData();
  //     formData.append("profile_pic", profilePic);

  //     try {
  //       const response = await axios.put("/api/profiles/1/", formData, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       });
  //       console.log(response.data); // Handle success case
  //     } catch (error) {
  //       console.error(error); // Handle error case
  //     }
  //   };

  return (
    <>
      <div>
        {images.map((img, id) => {
          return (
            <div key={id}>
              <img
                alt={img.image}
                src={img.image}
                // src="http://127.0.0.1:8000/uploads/ephdev_TNW1rTj.jpg"
                style={{ height: 200, width: "auto" }}
              />
            </div>
          );
        })}
        {/* <img alt="press" src={previewImage} /> */}
        <img alt="press" src={images.image} />
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleImageUpload}
        />
        <button onClick={handlePreviewImage}>Preview Image</button>
      </div>
      {/* <div>
        <h2>User Profile</h2>
        <Dropzone onDrop={handleFileUpload} accept="image/*" multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>
                Drag and drop an image file here, or click to select a file.
              </p>
            </div>
          )}
        </Dropzone>
        {profilePic && (
          <img
            src={URL.createObjectURL(profilePic)}
            alt="Profile Preview"
            width="200"
          />
        )}
        <button onClick={handleSubmit}>Update Profile Picture</button>
      </div> */}
      <div>
        <h1>Image App</h1>

        <h2>Images</h2>
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.image}
              alt={`${image.id}`}
              style={{ width: 200, height: "auto" }}
            />
            <button onClick={() => handleImageReplace(image.id)}>
              Replace
            </button>
            <button onClick={() => handleImageDelete(image.id)}>Delete</button>
          </div>
        ))}

        <h2>Add Image</h2>
        <input
          type="file"
          onChange={handleImageChange}
          ref={setFileInput}
          id="customFile"
          name="image"
          required
          // accept=".csv"
        />
        <button onClick={handleImageUpload}>Upload</button>
      </div>
    </>
  );
};

export default CMS;
