import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Marketing from "./components/Marketing";

const router = createBrowserRouter([
  { path: "/", element: <Marketing /> },
  { path: "/test", element: <h1>Test</h1> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
