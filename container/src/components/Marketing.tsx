import { mount } from "marketing/MarketingApp";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Marketing = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const {pathname:currentPathname} = useLocation();

  useEffect(() => {
    mount(ref.current as unknown as HTMLElement , {
      onNavigate: (location:{pathname:string}) => {
        if (location.pathname !== currentPathname) {
          navigate(location.pathname)
        }
      },
    });
  }, []);

  return <div ref={ref} />;
};

export default Marketing;
