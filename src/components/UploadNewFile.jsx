import { useNavigate } from "react-router-dom";
import { useImage } from "../ImageContext";

export const UploadNewFile = () => {
  const { setImage } = useImage();
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);

        navigate("/edit");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />
    </div>
  );
};
