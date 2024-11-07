import "react-image-crop/dist/ReactCrop.css";
import { useState } from "react";
import ImageCropper from "./components/ImageCropper";
import { UploadNewFile } from "./components/UploadNewFile";
import ImageCompressor from "./components/ImageCompressor";

function App() {
  const [image, setImage] = useState("");
  const [showHomeButton, setShowHomeButton] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [croppingImage, setCroppingImage] = useState(false);
  const [compressingImage, setCompressingImage] = useState(false);
  const [applyingFilters, setApplyingFilters] = useState(false);

  const handleClickOnCropImage = () => {
    setShowFileUpload(true);
    setCroppingImage(true);
    setCompressingImage(false);
    setApplyingFilters(false);
  };

  const handleClickOnCompressImage = () => {
    setShowFileUpload(true);
    setCroppingImage(false);
    setCompressingImage(true);
    setApplyingFilters(false);
  };

  const handleClickOnApplyFilters = () => {
    setShowFileUpload(true);
    setCroppingImage(false);
    setCompressingImage(false);
    setApplyingFilters(true);
  };

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
        <div className="text-lg mb-2 text-center text-gray-800 font-mono">
          Select one of the following actions:
        </div>
        <div className="text-lg mb-4 text-gray-800 font-mono">
          <ul className="list-disc list-inside">
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

        {image && croppingImage && (
          <ImageCropper
            image={image}
            setImage={setImage}
            setShowHomeButton={setShowHomeButton}
          />
        )}

        {image && compressingImage && (
          <ImageCompressor
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
