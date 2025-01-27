import App from "@/App";
import GamePage from "@/pages/GamePage/GamePage";
import HomePage from "@/pages/HomePage/HomePage";
import LobbyPage from "@/pages/LobbyPage/LobbyPage";
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
      {
        path: "/game",
        element: <GamePage />,
      },
      {
        path: "/lobby",
        element: <LobbyPage />,
      },
    ],
  },
]);

export default Router;
