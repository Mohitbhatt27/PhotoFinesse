// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import routes from "./routes/appRoutes.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter(routes);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import routes from "./routes/appRoutes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ImageProvider } from "./ImageContext.jsx"; // Import the provider

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageProvider>
      <RouterProvider router={router} />
    </ImageProvider>
  </StrictMode>
);
