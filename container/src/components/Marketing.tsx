import { mount } from "marketing/MarketingApp";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Marketing = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const {pathname:currentPathname} = useLocation();
  const onParentNavigateRef = useRef<any>(null);

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current as unknown as HTMLElement , {
      onNavigate: (location:{pathname:string}) => {
        if (location.pathname !== currentPathname) {
          navigate(location.pathname)
        }
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

export default Marketing;
