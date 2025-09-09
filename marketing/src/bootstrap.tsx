import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import { createBrowserHistory, createMemoryHistory } from "history";

const mount = (el: HTMLElement, { onNavigate ,defaultHistory  }: { onNavigate?:  any ,defaultHistory?:any }) => {
  const root = createRoot(el);
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  root.render(<App history={history} />);
};

if (process.env["NODE_ENV"] === "development") {
  const devRoot = document.getElementById("marketing_root");
  if (devRoot) {
    mount(devRoot ,{defaultHistory:createBrowserHistory()});
  }
}

export { mount };
