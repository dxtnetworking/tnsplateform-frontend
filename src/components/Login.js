import React from "react";
import axios from "axios";

class Login extends React.Component {
  gestionConnexion = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/auth/sign_in",
      data: {
        email: this.email.value,
        password: this.password.value,
      },
    }).then((response) => {
      console.log(response);
    });
  };
  render() {
    return (
      <div>
        <h1>Connexion</h1>
        <form onSubmit={this.gestionConnexion}>
          <input
            type="email"
            name="email"
            ref={(input) => (this.email = input)}
          />
          <input
            type="password"
            name="password"
            ref={(input) => (this.password = input)}
          />
          <input type="submit" value="Se connecter" />
        </form>
      </div>
    );
  }
}

export default Login;
