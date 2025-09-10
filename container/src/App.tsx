import { Navigate, Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { createContext, lazy, Suspense, useMemo, useState } from "react";

const Auth = lazy(() => import("./components/Auth"));
const Marketing = lazy(() => import("./components/Marketing"));
const Dashboard = lazy(() => import("./components/Dashboard"));

const AuthContext = createContext<{signedIn:boolean,setSignedIn:(value:boolean) => void} | null>(null);

const App = () => {
  const [signedIn, setSignedIn] = useState(false);

  const router = useMemo(()=>{
   return createBrowserRouter([
      {
        element: (
          <div className="w-svw">
            <Header />
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
          {
            path: "/dashboard",
            element: signedIn ? <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense> : <Navigate to="/auth/login" />,
          }
        ],
      },
      
    ])
  }, [signedIn]);

  return <AuthContext.Provider value={{ signedIn, setSignedIn }}>
    <RouterProvider router={router} />
  </AuthContext.Provider>;
};

export { AuthContext };
export default App;
