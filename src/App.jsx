import "react-image-crop/dist/ReactCrop.css";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { ImageProvider } from "./ImageContext";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <ImageProvider>
        <div className="flex items-center justify-center w-full h-full min-h-screen">
          <div className="bg-white border border-gray-800 shadow-lg rounded-lg p-4 w-[90vw] max-w-5xl grid grid-cols-12 gap-4 lg:gap-8 mx-auto">
            <div className="col-span-12 lg:col-span-2">
              <button
                onClick={() => navigate("/")}
                className="btn-action mb-4 w-full lg:w-auto "
              >
                🏠 Home
              </button>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 font-mono lg:mt-10">
                Photo-Finesse Editor
              </h1>
            </div>
            <div className="col-span-12">
              <Outlet />
            </div>
            <div className="col-span-12">
              <footer className="mt-6 text-gray-600 font-mono text-center">
                This app was created by Mohit Bhatt
              </footer>
            </div>
          </div>
        </div>
      </ImageProvider>
    </>
  );
}

export default App;
