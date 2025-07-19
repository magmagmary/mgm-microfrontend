import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";

const mount = (el: HTMLElement) => {
  const root = createRoot(el);
  root.render(<App />);
};

if (process.env["NODE_ENV"] === "development") {
  const devRoot = document.getElementById("marketing_root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
