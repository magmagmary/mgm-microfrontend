import { mount } from "dashboard/DashboardApp";
import { useEffect, useRef } from "react";

const Dashboard = () => {
  const ref = useRef(null);

  useEffect(() => {
     mount(ref.current as unknown as HTMLElement );

  }, []);

  return <div ref={ref} />;
};

export default Dashboard;
