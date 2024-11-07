import "react-image-crop/dist/ReactCrop.css";
import { useState } from "react";
import ImageCropper from "./components/ImageCropper";
import { UploadNewFile } from "./components/UploadNewFile";

function App() {
  const [image, setImage] = useState("");
  const [showHomeButton, setShowHomeButton] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {showHomeButton && (
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-blue-500 hover:bg-blue-300 text-white p-1 px-3 mx-auto rounded"
          >
            🏠
          </button>
        )}
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 font-mono">
          Image Editor
        </h1>

        <UploadNewFile setImage={setImage} />
        {image && (
          <ImageCropper
            image={image}
            setImage={setImage}
            setShowHomeButton={setShowHomeButton}
          />
        )}
      </div>
    </div>
  );
}

export default App;
