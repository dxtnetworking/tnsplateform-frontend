import "./App.css";
import routes from './routes'
import { BrowserRouter as Router, 
  Switch, 
  Route, 
  useHistory } from 'react-router-dom'
import { GlobalProvider } from "./context/Provider";
import isAuthenticated from "./utils/isAuthenticated";

// const currentUser = function() {
//   const user = localStorage.getItem('user')
//   
//   return(user)
// }
const RenderRoute = (route) => {
  const history = useHistory();

  document.title = route.title || 'DXTC Networking'

  if (route.needsAuth && !isAuthenticated()) {
    history.push('/auth/login')
  }

  return (
    <Route
      path={route.path}
      exact
      render={ (props) => <route.component {...props} />}
    ></Route>
  )
}

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>       
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index}/> ))}        
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
