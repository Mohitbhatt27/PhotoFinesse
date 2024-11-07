import { useState } from "react";
import ReactCrop, { makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const MIN_DIMENSION = 150;
const ASPECT_RATIO = 1;
function ImageCropper({ image, setImage }) {
  const [crop, setCrop] = useState();
  const [error, setError] = useState("");

  const onImageLoad = (e) => {
    const { width, height, naturalWidth, naturalHeight } = e.target;
    if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
      setError("Image is too small");
      setImage("");
      return;
    }
    if (error) setError("");
    const crop = makeAspectCrop(
      {
        unit: "%",
        width: 25,
      },
      ASPECT_RATIO,
      width,
      height
    );

    setCrop(crop);
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <ReactCrop
        src={image}
        crop={crop}
        onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
        keepSelection
        aspect={undefined}
        minWidth={MIN_DIMENSION}
      >
        <img
          src={image}
          alt="Upload"
          style={{ maxHeight: "70vh" }}
          onLoad={onImageLoad}
        />
      </ReactCrop>
      <button
        // onClick={setCanvasPreview}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded mx-auto block"
      >
        Apply Crop
      </button>
      {/* <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="border border-gray-300 mt-4"
      /> */}
    </div>
  );
}

export default ImageCropper;
