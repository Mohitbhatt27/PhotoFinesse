import App from "../App";
import Editor from "../pages/Editor";
import Home from "../pages/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/edit",
        element: <Editor />,
      },
    ],
  },
];

export default routes;
