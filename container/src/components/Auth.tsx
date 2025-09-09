import { mount } from "auth/AuthApp";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
  import useAuth from "../hooks/useAuth";

const Auth = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const {pathname:currentPathname} = useLocation();
  const onParentNavigateRef = useRef<any>(null);
  const { setSignedIn } = useAuth();

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current as unknown as HTMLElement , {
      onNavigate: (location:{pathname:string}) => {
        if (location.pathname !== currentPathname) {
          navigate(location.pathname)
        }
      },
      onSignIn: (value:boolean) => {
        setSignedIn(value);
      },
    });

    onParentNavigateRef.current = onParentNavigate;
  }, []);

  useEffect(() => {
    if (onParentNavigateRef.current) {
      onParentNavigateRef.current({ pathname: currentPathname });
    }
  }, [currentPathname]);

  return <div ref={ref} />;
};

export default Auth;
