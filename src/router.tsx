import { createBrowserRouter } from "react-router-dom";
import Tool from "./pages/tool/Tool";
import App from "./pages/main/App";
import ImageMinimize from "./components/tools/ImageMinimize";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tool",
    element: <Tool />,
  },
  {
    path: "/tool/image-minimize",
    element: <ImageMinimize />,
  },
]);

export default router;
