import "./App.css";
import routes from './routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Login from "./components/Login";
// import Accueil from "./components/Accueil";
// import Signup from "./components/Signup";
// import AppHeader from "./components/AppHeader";

const currentUser = function() {
  const user = localStorage.getItem('user')
  console.log(user)
  return(user)
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {
            routes.map( (route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                render={ (props) => <route.component {...props} />}
              ></Route>
            ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
