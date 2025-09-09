import { Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { lazy, Suspense } from "react";

const Auth = lazy(() => import("./components/Auth"));
const Marketing = lazy(() => import("./components/Marketing"));

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
        element: <Suspense fallback={<div>Loading...</div>}><Marketing /></Suspense>,
      },
      {
        path: "/auth/*",
        element: <Suspense fallback={<div>Loading...</div>}><Auth /></Suspense>,
      },
    ],
  },
  
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
