export const compressImage = (imageSrc, quality = 0.7) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  return new Promise((resolve, reject) => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height); //draw image with img as source and 0,0 as top left corner

      //compression
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Compression failed"));
            return;
          }
          resolve(blob);
        },
        "image/jpeg",
        quality
      );
    };
    img.onerror = reject;
    img.src = imageSrc;
  });
};
