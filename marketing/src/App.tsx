import { Route, Switch } from "react-router-dom";
import { Router } from "react-router";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import type { History } from "history";

const App = ({history}:{history:History}) => {
  return <Router history={history} >
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/pricing"  component={Pricing} />
    </Switch>
  </Router>;
};

export default App;