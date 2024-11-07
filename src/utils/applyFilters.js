export const applyFilter = (image, filters) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();

  return new Promise((resolve, reject) => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      ctx.filter = `
        brightness(${filters.brightness}%)
        contrast(${filters.contrast}%)
        saturate(${filters.saturation}%)
        sepia(${filters.sepia}%)
      `;

      ctx.drawImage(img, 0, 0, img.width, img.height);
      resolve(canvas.toDataURL("image/jpeg"));
    };

    img.onerror = reject;
    img.src = image;
  });
};
