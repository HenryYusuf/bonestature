import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import Anthropobone from "./routes/Anthropobone.tsx";
import AntropologiRagawi from "./routes/AntropologiRagawi.tsx";
import DjajaSuryaAtmadja from "./routes/DjajaSuryaAtmadja.tsx";
import Pearson from "./routes/Pearson.tsx";
import Stevenson from "./routes/Stevenson.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/anthropobone",
    element: <Anthropobone />,
  },
  {
    path: "/antropologi-ragawi",
    element: <AntropologiRagawi />,
  },
  {
    path: "/djaja-surya-atmadja",
    element: <DjajaSuryaAtmadja />,
  },
  {
    path: "/pearson",
    element: <Pearson />,
  },
  {
    path: "/stevenson",
    element: <Stevenson />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
