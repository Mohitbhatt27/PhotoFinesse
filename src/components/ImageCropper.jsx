import { useRef, useState } from "react";
import ReactCrop, {
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { setCanvasPreview } from "../utils/setCanvasPreview";

const MIN_DIMENSION = 150;
const ASPECT_RATIO = 1;
function ImageCropper({ image, setImage, setShowHomeButton }) {
  const [crop, setCrop] = useState();
  const [error, setError] = useState("");
  const [showDownload, setShowDownload] = useState(false);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

  setShowHomeButton(true);

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

  const handleClickOnSaveChanges = () => {
    setImage(previewCanvasRef.current.toDataURL());
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
          ref={imgRef}
          alt="Upload"
          style={{ maxHeight: "70vh" }}
          onLoad={onImageLoad}
        />
      </ReactCrop>

      <button
        onClick={() => {
          setShowDownload(true);
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
