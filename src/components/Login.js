import React from "react";
import axios from "axios";
import { Button, Form, Input, Grid, Header as SUHeader, Image, Message, Segment } from 'semantic-ui-react'

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
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column  style={{ maxWidth: 450 }}>
            <SUHeader as='h2' textAlign='center'>
              Se connecter!
            </SUHeader>
            <Segment stacked>
              <form className="ui form" onSubmit={this.gestionConnexion} >
                <div className="fluid field">
                  <label for="email" className="">Email</label>
                  <input type="email" name="email" ref={(input) => this.email = input}/>
                </div>
                <div className="fluid field">
                  <label for="password" className="">Mot de passe</label>
                  <input type="password" name="password" ref={(input) => this.password = input}/>
                </div>
                <div>
                  <Button type="submit" color="primary" size="large">Se connecter</Button>
                </div>
              </form>
            </Segment>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Login;
