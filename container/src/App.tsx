import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Marketing from "./components/Marketing";

const router = createBrowserRouter([{ path: "/", element: <Marketing /> }]);

const App = () => {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
