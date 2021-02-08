import "./App.css";
import Login from "./components/Login";
import Accueil from "./components/Accueil";
import Signup from "./components/Signup";
import AppHeader from "./components/AppHeader";

const currentUser = function() {
  const user = localStorage.getItem('user')
  console.log(user)
  return(user)
}

function App() {
  return (
    <div className="App">
      <AppHeader/>
      {currentUser() ? <Accueil/> :<><Login/> <Signup/> </> }
    </div>
  );
}

export default App;
