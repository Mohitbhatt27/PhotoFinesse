import { useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import ImageCropper from "./components/ImageCropper";
import { UploadNewFile } from "./components/UploadNewFile";
import ImageCompressor from "./components/ImageCompressor";
import ImageFilter from "./components/ImageFilter";

function App() {
  const [image, setImage] = useState("");
  const [showHomeButton, setShowHomeButton] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [action, setAction] = useState("");

  const handleClickOnCropImage = () => {
    setAction("crop");
    setShowFileUpload(true);
  };

  const handleClickOnCompressImage = () => {
    setAction("compress");
    setShowFileUpload(true);
  };

  const handleClickOnApplyFilters = () => {
    setAction("filter");
    setShowFileUpload(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 flex items-center justify-center px-4 lg:px-20 xl:px-40">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl text-center">
        {showHomeButton && (
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-blue-500 hover:bg-blue-300 text-white p-1 px-3 mx-auto rounded mb-4"
          >
            🏠 Home
          </button>
        )}
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 font-mono">
          Image Editor
        </h1>
        <div className="text-lg mb-6 text-center text-gray-800 font-mono">
          Welcome to our Image Editor! Here's why you should use our app:
        </div>
        <div className="text-lg mb-4 text-left text-gray-800 font-mono">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>No sign up needed:</strong> Just upload the image and
              start editing
            </li>
            <li>
              <strong>Privacy First:</strong> Absolutely no data storage or
              cookies. Your privacy is our priority.
            </li>
            <li>
              <strong>Cross-Platform Compatibility:</strong> Works on any
              device, anywhere.
            </li>
          </ul>
        </div>

        <div className="text-lg mb-2 text-center text-gray-800 font-mono">
          Select one of the following actions:
        </div>
        <div className="text-lg mb-4 text-gray-800 font-mono">
          <ul className="list-disc list-inside space-y-2">
            <li
              onClick={handleClickOnCropImage}
              className="cursor-pointer hover:underline hover:text-blue-900"
            >
              Crop an image
            </li>
            <li
              onClick={handleClickOnCompressImage}
              className="cursor-pointer hover:underline hover:text-blue-900"
            >
              Compress an image
            </li>
            <li
              onClick={handleClickOnApplyFilters}
              className="cursor-pointer hover:underline hover:text-blue-900"
            >
              Apply filters
            </li>
          </ul>
        </div>

        {showFileUpload && <UploadNewFile setImage={setImage} />}
        {image && action === "crop" && (
          <ImageCropper
            image={image}
            setImage={setImage}
            setShowHomeButton={setShowHomeButton}
          />
        )}
        {image && action === "compress" && (
          <ImageCompressor
            image={image}
            setImage={setImage}
            setShowHomeButton={setShowHomeButton}
          />
        )}
        {image && action === "filter" && (
          <ImageFilter
            image={image}
            setImage={setImage}
            setShowHomeButton={setShowHomeButton}
          />
        )}
        <footer className="mt-6 text-gray-600 font-mono">
          This app was created by Mohit Bhatt
        </footer>
      </div>
    </div>
  );
}

export default App;
