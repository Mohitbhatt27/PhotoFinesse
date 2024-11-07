import { useRef, useState } from "react";
import ReactCrop, {
  makeAspectCrop,
  convertToPixelCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { setCanvasPreview } from "../utils/setCanvasPreview";
import { useImage } from "../ImageContext";

const MIN_DIMENSION = 150;
const ASPECT_RATIO = 1;

function ImageCropper({ imgRef, handleOnFilterClick }) {
  const { image, setImage } = useImage();
  const [crop, setCrop] = useState();
  const [error, setError] = useState("");
  const [showDownload, setShowDownload] = useState(false);
  const previewCanvasRef = useRef(null);

  const onImageLoad = (e) => {
    const { width, height, naturalWidth, naturalHeight } = e.target;
    if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
      setError("Image is too small");
      setImage(""); // clear image in context if too small
      return;
    }
    if (error) setError(""); // clear error if valid image

    // Initialize the crop area with an aspect ratio
    const crop = makeAspectCrop(
      {
        unit: "%", // crop area in percentage
        width: 25, // initial width in percentage
      },
      ASPECT_RATIO, // maintain aspect ratio
      width,
      height
    );

    setCrop(crop); // Set initial crop values
  };

  const handleClickOnSaveChanges = () => {
    // Use canvas to preview the cropped image
    setImage(previewCanvasRef.current.toDataURL()); // Save the cropped image back to the context
    handleOnFilterClick();
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}

      {/* ReactCrop component for cropping */}
      <ReactCrop
        src={image} // Use image from context
        crop={crop}
        onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)} // Update crop state
        keepSelection
        aspect={undefined}
        minWidth={MIN_DIMENSION}
      >
        <img
          src={image} // Use the image from context as the source
          ref={imgRef}
          alt="Upload"
          style={{ maxHeight: "70vh" }}
          onLoad={onImageLoad}
        />
      </ReactCrop>

      <button
        onClick={() => {
          setShowDownload(true);
          // Generate preview of the cropped image
          setCanvasPreview(
            imgRef.current,
            previewCanvasRef.current,
            convertToPixelCrop(
              crop,
              imgRef.current.width,
              imgRef.current.height
            )
          );
        }}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded mx-auto block"
      >
        Apply Crop
      </button>

      {/* Canvas for showing preview of cropped image */}
      {crop && (
        <canvas
          ref={previewCanvasRef}
          className=" mt-4 mx-auto block"
          style={{
            border: "",
            width: "auto",
            height: "175px",
            objectFit: "contain",
          }}
        />
      )}

      {/* Buttons to save or download cropped image */}
      {showDownload && (
        <div className="mt-4 flex justify-around  items-center">
          <button
            onClick={handleClickOnSaveChanges}
            className=" bg-green-500 text-white py-2 px-4 rounded"
          >
            Save Changes
          </button>
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.download = "image.png";
              link.href = previewCanvasRef.current.toDataURL("image/png");
              link.click();
            }}
            className=" bg-blue-500 text-white py-2 px-4 rounded"
          >
            Download Image
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageCropper;
