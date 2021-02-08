import "./App.css";
import Login from "./components/Login";
import Accueil from "./components/Accueil";

const currentUser = function() {
  const user = localStorage.getItem('user')
  console.log(user)
  return(user)
}

function App() {
  return (
    <div className="App">
      {currentUser() ? <Accueil/> : <Login/> }
    </div>
  );
}

export default App;
