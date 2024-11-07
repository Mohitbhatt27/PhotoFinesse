import { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const useImage = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
