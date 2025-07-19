import { mount } from "marketing/MarketingApp";
import { useEffect, useRef } from "react";

const Marketing = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current as unknown as HTMLElement);
  }, []);

  return <div ref={ref} />;
};

export default Marketing;
