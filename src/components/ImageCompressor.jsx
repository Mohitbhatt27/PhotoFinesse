import { useState, useEffect } from "react";
import { compressImage } from "../utils/compressImage";

const ImageCompressor = ({ image, setImage, setShowHomeButton }) => {
  const [compressedImageUrl, setCompressedImageUrl] = useState("");
  const [compressionLevel, setCompressionLevel] = useState(0.7);
  const [approxSize, setApproxSize] = useState("");
  useEffect(() => {
    const handleCompress = async () => {
      if (image) {
        const compressedBlob = await compressImage(image, compressionLevel);
        const compressedUrl = URL.createObjectURL(compressedBlob);
        setCompressedImageUrl(compressedUrl); // Calculate approximate size of the compressed image
        const blobSizeKB = compressedBlob.size / 1024;
        setApproxSize(blobSizeKB.toFixed(2) + " KB");
        setShowHomeButton(true); // Show the home button after compression
      }
    };
    handleCompress();
  }, [image, compressionLevel, setShowHomeButton]);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = compressedImageUrl;
    link.download = `compressed_${new Date().getTime()}.jpeg`;
    // Save file with original extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveChanges = () => {
    if (compressedImageUrl) {
      setImage(compressedImageUrl);
    }
  };
  return (
    <div>
      <div className="text-center mb-4">
        <label className="block mb-2 text-lg font-mono text-gray-800">
          Compression Level:
        </label>
        <select
          className="block w-full p-2 border border-gray-300 rounded"
          value={compressionLevel}
          onChange={(e) => setCompressionLevel(parseFloat(e.target.value))}
        >
          <option value="0.9">High (90%) - Best Quality</option>
          <option value="0.7">Medium (70%) - Good Quality</option>
          <option value="0.5">Low (50%) - Balanced</option>
          <option value="0.3">Very Low (30%) - Smaller Size</option>
        </select>
        <p className="mt-2 text-gray-600">Approximate Size: {approxSize}</p>
      </div>
      {compressedImageUrl ? (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 font-mono">
            Compressed Image
          </h2>
          <img src={compressedImageUrl} alt="Compressed" className="mx-auto" />

          <div className="flex justify-between">
            <button
              onClick={handleSaveChanges}
              className=" mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={handleDownload}
              className="mt-4  bg-blue-500 text-white py-2 px-4 rounded"
            >
              Download Compressed Image
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-800 font-mono">Compressing...</p>
      )}
    </div>
  );
};
export default ImageCompressor;
