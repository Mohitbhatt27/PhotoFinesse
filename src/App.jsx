import { useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import "./App.css";
import ImageCropper from "./components/ImageCropper";
import { UploadNewFile } from "./components/UploadNewFile";
import ImageCompressor from "./components/ImageCompressor";
import ImageFilter from "./components/ImageFilter";

function App() {
  const [image, setImage] = useState("");
  const [showHomeButton, setShowHomeButton] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [action, setAction] = useState("");
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
      } flex items-center justify-center px-4 lg:px-20 xl:px-40`}
    >
      <div
        className={`bg-${
          darkMode ? "gray-800" : "white"
        } shadow-lg rounded-lg p-6 w-full max-w-3xl text-center`}
      >
        {showHomeButton && (
          <button
            onClick={() => (window.location.href = "/")}
            className={`bg-${darkMode ? "blue-700" : "blue-500"} hover:bg-${
              darkMode ? "blue-500" : "blue-300"
            } text-${
              darkMode ? "white" : "white"
            } p-1 px-3 mx-auto rounded mb-4`}
          >
            🏠 Home
          </button>
        )}
        <h1
          className={`text-3xl font-bold mb-6 text-center text-${
            darkMode ? "white" : "gray-800"
          } font-mono`}
        >
          Photo-Finesse Editor
        </h1>
        <div
          className={`text-lg mb-6 text-center text-${
            darkMode ? "gray-400" : "gray-800"
          } font-mono`}
        >
          Welcome to our Image Editor! I am giving you 3 reason why you should
          consider using our app:
        </div>
        <div
          className={`text-lg mb-4 text-left text-${
            darkMode ? "gray-400" : "gray-800"
          } font-mono`}
        >
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

        <div
          className={`text-lg mb-2 text-center text-${
            darkMode ? "gray-400" : "gray-800"
          } font-mono`}
        >
          Select one of the following actions:
        </div>
        <div
          className={`text-lg mb-4 text-${
            darkMode ? "gray-400" : "gray-800"
          } font-mono`}
        >
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
        <footer
          className={`mt-6 text-${
            darkMode ? "gray-400" : "gray-600"
          } font-mono`}
        >
          This app was created by Mohit Bhatt
        </footer>
        <button
          onClick={toggleDarkMode}
          className={`mt-4 p-2 rounded bg-${
            darkMode ? "gray-700" : "gray-200"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
