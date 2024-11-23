import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Add from "./components/Add";
import Show from "./components/Show";
import Update from "./components/Update";

const projectroute = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "addpage",
        element: <Add />,
      },
      {
        path: "showpage",
        element: <Show />,
      },
      {
        path: "updatepage",
        element: <Update />,
      },
    ],
  },
]);

export default projectroute;
