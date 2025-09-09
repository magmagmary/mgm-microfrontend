import { Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Marketing from "./components/Marketing";
import Header from "./components/Header";
import Auth from "./components/Auth";

const router = createBrowserRouter([
  {
    element: (
      <div className="w-svw">
        <Header signedIn={false} />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/*",
        element: <Marketing />,
      },
    ],
  },
  {
    path: "/auth/*",
    element: <Auth />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
