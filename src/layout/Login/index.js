import React from 'react'
import { 
  Form, 
  Grid, 
  Button,                             
  Header as SUHeader, 
  Segment, 
  Message} from 'semantic-ui-react';

const LoginUI = ({
  form: { onChange, form, loginFormValid, onSubmit, loading, error }, 
}) => {
    return (
      <Grid centered style={{ height: '100vh' }} >
        <Grid.Column  style={{ maxWidth: 450 }}>
          <SUHeader as='h2' textAlign='center'>
            Se connecter!
          </SUHeader>
          <Segment >    
            <Form>  
              {error && <Message content={error} negative />}
              <Form.Field>
                <Form.Input 
                  value={form.email || ''}
                  onChange={onChange}
                  label="Email" 
                  type="email" 
                  name="email" 
                  placeholder="Adresse email"          
                  />
                  
              </Form.Field>
              <Form.Field>
                <Form.Input 
                  value={form.password || ''}
                  onChange={onChange}
                  label="Mot de passe" 
                  type="password" 
                  name="password" 
                  placeholder="Mot de passe"           
                  />
                  
              </Form.Field>
              <Button 
                disabled={!loginFormValid || loading} 
                onClick={onSubmit}
                loading={loading}
                type="submit" 
                primary
                fluid>Se connecter</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
}

export default LoginUI
