import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";

const rootElement = document.getElementById("container_root");

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(<App />);
}
