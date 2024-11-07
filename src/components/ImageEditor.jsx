import { useRef } from "react";
import { useEffect } from "react";

function ImageEditor({ image }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = image;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [image]);
  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className="border border-gray-300"
    />
  );
}
export default ImageEditor;
