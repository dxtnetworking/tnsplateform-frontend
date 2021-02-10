import "./App.css";
import routes from './routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalProvider } from "./context/Provider";

// const currentUser = function() {
//   const user = localStorage.getItem('user')
//   console.log(user)
//   return(user)
// }

function App() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
