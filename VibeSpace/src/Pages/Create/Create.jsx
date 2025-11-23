import React from "react";
import { useState } from "react";
import "./Create.css";

const Create = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [location, setLocation] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePost = (e) => {
    alert("Image Posted!");
    setPreview("");
    setCaption("");
    setHashtags("");
    setLocation("");

    document.getElementById("imageInput").value = "";
  };

  return (
    <>
      <div className="content flex justify-center items-center">
        <div className="create flex flex-col">
          <div className="flex justify-center">
            <div className="addphoto">
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                onChange={handleImageChange}
                className="px-4 py-2 border rounded-lg border-gray-400"
              />
            </div>
            <button
              onClick={() => document.getElementById("imageInput").click()}
              className="addimg" 
            >
              Add Image
            </button>
          </div>
          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="rounded-lg border w-xl h-max"
              />
            </div>
          )}

          <div>
            Caption:{" "}
            <input
              type="text"
              placeholder="Enter Caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="px-4 py-2 border rounded-lg border-gray-400"
            />
          </div>
          <div>
            Hashtags:{" "}
            <input
              type="text"
              placeholder="Enter Hashtags"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
              className="px-4 py-2 border rounded-lg border-gray-400"
            />
          </div>
          <div>
            Location:{" "}
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-2 border rounded-lg border-gray-400"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="postbtn w-xs" onClick={handlePost}>
              Post
            </button>
          </div>
        </div>  
      </div>
    </>
  );
};

export default Create;
