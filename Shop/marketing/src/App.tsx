import { RouterProvider } from "react-router-dom";
import Landing from "./components/Landing";
import { createBrowserRouter } from "react-router-dom";
import Pricing from "./components/Pricing";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/pricing", element: <Pricing /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
