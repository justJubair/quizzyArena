import App from "@/App";
import HomePage from "@/pages/HomePage/HomePage";
import { createBrowserRouter } from "react-router-dom";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default Router;
