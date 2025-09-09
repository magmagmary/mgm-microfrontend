import { Route, Switch} from "react-router-dom";
import { Router } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import type { History } from "history";

const App = ({history,onSignIn}:{history:History,onSignIn:(value:boolean) => void}) => {
  return <Router history={history} >
    <Switch>
      <Route path="/auth/login" component={()=><Login onSignIn={onSignIn} />} />
      <Route path="/auth/signup" component={()=><SignUp onSignIn={onSignIn} />} />
    </Switch>
  </Router>;
};

export default App;