import { mount } from "marketing/MarketingApp";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Marketing = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    mount(ref.current as unknown as HTMLElement , {
      onNavigate: (location:{pathname:string}) => {
       navigate(location.pathname)
      },
    });
  }, []);

  return <div ref={ref} />;
};

export default Marketing;
