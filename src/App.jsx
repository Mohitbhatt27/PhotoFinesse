import "react-image-crop/dist/ReactCrop.css";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { ImageProvider } from "./ImageContext";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <ImageProvider>
        <div className="flex flex-col items-center justify-around px-4 lg:px-20 xl:px-40 h-[99vh]">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl text-center">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-500 hover:bg-
  blue-300
     text-white
    p-1 px-3 mx-auto rounded mb-4"
            >
              🏠 Home
            </button>
            <h1
              className="text-3xl font-bold mb-6 text-center text-gray-800
  font-mono"
            >
              Photo-Finesse Editor
            </h1>

            <Outlet />
            <footer
              className="mt-6 text-
            gray-600 font-mono"
            >
              This app was created by Mohit Bhatt
            </footer>
          </div>
        </div>
      </ImageProvider>
    </>
  );
}

export default App;
