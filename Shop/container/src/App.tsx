import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <div className="text-red-500">Container</div> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
