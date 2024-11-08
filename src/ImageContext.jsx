import { createContext, useContext, useState } from "react";

const ImageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useImage = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState(null);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};
