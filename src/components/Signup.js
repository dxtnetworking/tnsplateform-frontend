import React from "react";
import axios from "axios";
import { Button, Form, Input, Grid, Header as SUHeader, Image, Message, Segment } from 'semantic-ui-react'

class Signup extends React.Component {
  handleSignup = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3001/auth",
      data: {
        email: this.email.value,
        password: this.password.value,
        prenom: this.prenom.value,
        nom: this.nom.value
      },
    }).then((response) => {
      console.log(response);
      localStorage.setItem('user', 
        JSON.stringify({
          'access-token': response.headers['access-token'],
          'client': response.headers['client'],
          'uid': response.data.data.uid
        })
      )
      window.location = '/'
    });
  };
  render() {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column  style={{ maxWidth: 450 }}>
            <SUHeader as='h2' textAlign='center'>
              S'inscrire!
            </SUHeader>
            <Segment stacked>
              <form className="ui form" onSubmit={this.handleSignup} >
                <div className="fluid field">
                  <label for="prenom" className="">Prénom</label>
                  <input type="text" name="prenom" ref={(input) => this.prenom = input}/>
                </div>
                <div className="fluid field">
                  <label for="nom" className="">Nom de famille</label>
                  <input type="text" name="nom" ref={(input) => this.nom = input}/>
                </div>
                <div className="fluid field">
                  <label for="email" className="">Email</label>
                  <input type="email" name="email" ref={(input) => this.email = input}/>
                </div>
                <div className="fluid field">
                  <label for="password" className="">Mot de passe</label>
                  <input type="password" name="password" ref={(input) => this.password = input}/>
                </div>
                <div>
                  <Button type="submit" color="primary" size="large">S'inscrire</Button>
                </div>
              </form>
            </Segment>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Signup;
