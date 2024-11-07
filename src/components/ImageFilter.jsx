import { useState, useEffect } from "react";
import { applyFilter } from "../utils/applyFilters";
import { useImage } from "../ImageContext";

const ImageFilter = ({ handleOnResizeClick }) => {
  const { image, setImage } = useImage();
  const [filteredImageUrl, setFilteredImageUrl] = useState("");
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    sepia: 0,
  });

  useEffect(() => {
    const applyFilters = async () => {
      if (image) {
        const filteredImage = await applyFilter(image, filters);
        setFilteredImageUrl(filteredImage);
      }
    };

    applyFilters();
  }, [image, filters]);

  const handleSaveChanges = () => {
    setImage(filteredImageUrl);
    handleOnResizeClick();
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filteredImageUrl;
    link.download = `filtered_${new Date().getTime()}.jpeg`;
    // Save file with original extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const preappliedThemes = [
    {
      name: "Default",
      filters: {}, // No filters applied
    },
    {
      name: "Vintage",
      filters: { brightness: 120, contrast: 110, saturation: 80, sepia: 30 },
    },
    {
      name: "Black & White",
      filters: { brightness: 100, contrast: 100, saturation: 0, sepia: 0 },
    },
    {
      name: "Summer",
      filters: { brightness: 130, contrast: 110, saturation: 140, sepia: 10 },
    },
    {
      name: "Warm Glow",
      filters: { brightness: 120, contrast: 105, saturation: 90, sepia: 20 },
    },
    {
      name: "Cool Blues",
      filters: {
        brightness: 110,
        contrast: 120,
        saturation: 80,
        sepia: 0,
        hueRotate: 190,
      },
    },
    {
      name: "High Contrast",
      filters: { brightness: 100, contrast: 150, saturation: 120, sepia: 0 },
    },
    {
      name: "Golden Hour",
      filters: { brightness: 115, contrast: 105, saturation: 110, sepia: 35 },
    },
    {
      name: "Soft Pastel",
      filters: { brightness: 125, contrast: 95, saturation: 70, sepia: 15 },
    },
    {
      name: "Cold Winter",
      filters: {
        brightness: 105,
        contrast: 120,
        saturation: 90,
        sepia: 5,
        hueRotate: 200,
      },
    },
    {
      name: "Retro",
      filters: { brightness: 110, contrast: 95, saturation: 70, sepia: 50 },
    },
    {
      name: "Dramatic",
      filters: { brightness: 90, contrast: 130, saturation: 90, sepia: 10 },
    },
    {
      name: "Sunset",
      filters: {
        brightness: 120,
        contrast: 100,
        saturation: 130,
        sepia: 20,
        hueRotate: 30,
      },
    },
  ];

  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 font-mono">
          Adjust Filters
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <label>
            Brightness
            <input
              type="range"
              name="brightness"
              min="0"
              max="200"
              value={filters.brightness}
              onChange={handleFilterChange}
              className="w-full"
            />
          </label>
          <label>
            Contrast
            <input
              type="range"
              name="contrast"
              min="0"
              max="200"
              value={filters.contrast}
              onChange={handleFilterChange}
              className="w-full"
            />
          </label>
          <label>
            Saturation
            <input
              type="range"
              name="saturation"
              min="0"
              max="200"
              value={filters.saturation}
              onChange={handleFilterChange}
              className="w-full"
            />
          </label>
          <label>
            Sepia
            <input
              type="range"
              name="sepia"
              min="0"
              max="100"
              value={filters.sepia}
              onChange={handleFilterChange}
              className="w-full"
            />
          </label>
        </div>
      </div>

      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 font-mono">
          Pre-applied Themes
        </h2>

        <div className="flex justify-center">
          <select
            onChange={(e) =>
              setFilters(preappliedThemes[e.target.value].filters)
            }
            className="bg-blue-700 text-yellow-300 rounded p-2"
          >
            <option value="" disabled selected>
              Select one of our prebuilt themes
            </option>
            {preappliedThemes.map((theme, index) => (
              <option key={index} value={index}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredImageUrl && (
        <div>
          <img src={filteredImageUrl} alt="Filtered" className="mx-auto" />
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={handleSaveChanges}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={handleDownload}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Download Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageFilter;
