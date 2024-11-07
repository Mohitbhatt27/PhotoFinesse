import { useRef, useState } from "react";
import { useImage } from "../ImageContext";
import ImageCropper from "../components/ImageCropper";
import ImageFilter from "../components/ImageFilter";
import ImageCompressor from "../components/ImageCompressor";

const Editor = () => {
  const { image } = useImage();
  const [showMainImage, setShowMainImage] = useState(true);
  const [showCropper, setShowCropper] = useState(false);
  const [showCompress, setShowCompress] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const imgRef = useRef(null);

  const handleOnCropClick = () => {
    setShowCropper(true);
    setShowMainImage(false);
    setShowCompress(false);
    setShowFilters(false);
  };
  const handleOnResizeClick = () => {
    setShowMainImage(false);
    setShowCompress(true);
    setShowCropper(false);
    setShowFilters(false);
  };
  const handleOnFilterClick = () => {
    setShowMainImage(false);
    setShowFilters(true);
    setShowCompress(false);
    setShowCropper(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl text-center border flex">
      {showMainImage && (
        <img
          className="max-h-[75vh] max-w-[35vw] border border-gray-300 rounded-lg"
          src={image}
          alt="image"
          ref={imgRef}
        />
      )}
      <div className="flex flex-col w-full">
        <div className="flex justify-around">
          <button onClick={handleOnCropClick} className="mx-4">
            CROP
          </button>
          <button onClick={handleOnFilterClick} className="mx-4">
            FILTERS
          </button>
          <button onClick={handleOnResizeClick} className="mx-4">
            RESIZE
          </button>
        </div>
        {showCropper && (
          <ImageCropper
            imgRef={imgRef}
            handleOnFilterClick={handleOnFilterClick}
          />
        )}
        {showCompress && <ImageCompressor />}
        {showFilters && (
          <ImageFilter handleOnResizeClick={handleOnResizeClick} />
        )}
      </div>
    </div>
  );
};

export default Editor;
