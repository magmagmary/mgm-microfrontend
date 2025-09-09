import { Route, Switch} from "react-router-dom";
import { Router } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import type { History } from "history";

const App = ({history}:{history:History}) => {
  return <Router history={history} >
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/signup" component={SignUp} />
    </Switch>
  </Router>;
};

export default App;