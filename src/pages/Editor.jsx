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

  const handleShowJustMainImage = () => {
    setShowMainImage(true);
    setShowFilters(false);
    setShowCompress(false);
    setShowCropper(false);
  };

  return (
    <div className="bg-gray-700 shadow-lg rounded-lg p-4 text-center border w-full lg:w-3/4 xl:w-1/2 mx-auto">
      {showMainImage && (
        <img
          className="max-h-[75vh] max-w-full border border-yellow-300 rounded-lg mx-auto mb-4"
          src={image}
          alt="image"
          ref={imgRef}
        />
      )}
      <div className="flex flex-col w-full bg-slate-50 p-4 rounded-lg">
        <div className="flex justify-around mb-4 flex-wrap">
          <button onClick={handleOnCropClick} className="btn-action">
            CROP
          </button>
          <button onClick={handleOnFilterClick} className="btn-action">
            FILTERS
          </button>
          <button onClick={handleOnResizeClick} className="btn-action">
            RESIZE
          </button>
        </div>
        {showCropper && (
          <ImageCropper
            imgRef={imgRef}
            handleShowJustMainImage={handleShowJustMainImage}
          />
        )}
        {showCompress && (
          <ImageCompressor handleShowJustMainImage={handleShowJustMainImage} />
        )}
        {showFilters && (
          <ImageFilter handleShowJustMainImage={handleShowJustMainImage} />
        )}
      </div>
    </div>
  );
};

export default Editor;
