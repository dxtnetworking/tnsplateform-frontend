import React from 'react'
import { Header as SUHeader, Form, Button, Grid, Segment } from 'semantic-ui-react';

function SignupUI({form:{onChange, form, registerFormValid}}) {
    return (
      <Grid centered style={{ height: '100vh' }} >
        <Grid.Column  style={{ maxWidth: 450 }}>
          <SUHeader as='h2' textAlign='center'>
            S'inscrire!
          </SUHeader>
          <Segment pilled >    
            <Form>
              <Form.Field>
                <Form.Input 
                  value={form.prenom || ''}
                  onChange={onChange}
                  label="Prénom" 
                  type="text" 
                  name="prenom" 
                  placeholder="Prénom"/>
              </Form.Field>
              <Form.Field>
                <Form.Input 
                  value={form.nom || ''}
                  onChange={onChange}
                  label="Nom" 
                  type="text" 
                  name="nom" 
                  placeholder="Nom" />
              </Form.Field>
              <Form.Field>
                <Form.Input 
                  value={form.email || ''}
                  onChange={onChange}
                  label="Email" 
                  type="email" 
                  name="email" 
                  placeholder="Adresse email" />
              </Form.Field>
              <Form.Field>
                <Form.Input 
                  value={form.password || ''}
                  onChange={onChange}
                  label="Mot de passe" 
                  type="password" 
                  name="password" 
                  placeholder="Mot de passe" />
              </Form.Field>
              <Button 
                disabled={!registerFormValid} 
                type="submit" 
                color="primary" 
                fluid>S'inscrire</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
}

export default SignupUI
