export const UploadNewFile = ({ setImage }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleImageUpload}
      className="mb-4"
    />
  );
};
