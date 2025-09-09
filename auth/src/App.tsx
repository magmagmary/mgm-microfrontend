import { Route, Switch} from "react-router-dom";
import { Router } from "react-router";
import Login from "./components/Login";
import Logout from "./components/Logout";
import type { History } from "history";

const App = ({history}:{history:History}) => {
  return <Router history={history} >
    <Switch>
      <Route path="/" exact component={()=>{
        history.push("/login");
        return null;
      }} />
      <Route path="/login" exact component={Login} />
      <Route path="/logout" exact component={Logout} />
    </Switch>
  </Router>;
};

export default App;