import { createApp } from "vue";
import Dashboard from "./components/Dashboard";

const mount = (el: HTMLElement) => {
  const app = createApp(Dashboard);
  app.mount(el);
};


if (process.env["NODE_ENV"] === "development") {
  const devRoot = document.getElementById("dashboard_root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
