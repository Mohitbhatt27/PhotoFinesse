import "react-image-crop/dist/ReactCrop.css";
import { useState } from "react";
import ImageCropper from "./components/ImageCropper";

function App() {
  const [image, setImage] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Image Editor
        </h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4"
        />
        {image && <ImageCropper image={image} setImage={setImage} />}
      </div>
    </div>
  );
}

export default App;
