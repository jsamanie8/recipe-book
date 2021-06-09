import Login from './components/account/Login';
import CreateAccount from './components/account/CreateAccount';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/createAccount" component={CreateAccount}>
        </Route>
        <Route path={["/", "/login"]} component={Login}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
