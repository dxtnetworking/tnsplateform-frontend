import React from "react";
import axios from "axios";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Log-in to your account
          </Header>
          <Form size='large' onSubmit={this.gestionConnexion}>
            <Segment stacked>
              <Form.Input fluid 
                icon='user' 
                iconPosition='left' 
                placeholder='Adresse e-mail' 
                type="email"
                name="email"
                ref={(input) => (this.email = input)}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Mot de passe'
                type='password'
                name="password"
                ref={(input) => (this.password = input)}
              />

              <Button type='submit' color='teal' fluid size='large'>
                Se connecter
              </Button>
            </Segment>
          </Form>
          <Message>
            Pas encore inscrit? <a href='#'>S'inscrire</a>
          </Message>
        </Grid.Column>
        </Grid>
      </div>

    );
  }
}

export default Login;
