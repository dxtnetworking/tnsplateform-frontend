import React from 'react'
import { 
  Form, 
  Grid, 
  Button,                             
  Header as SUHeader, 
  Segment } from 'semantic-ui-react';

const SignupUI = ({
  form: { onChange, form, registerFormValid, onSubmit, loading, fieldErrors }, 
}) => {
    return (
      <Grid centered style={{ height: '100vh' }} >
        <Grid.Column  style={{ maxWidth: 450 }}>
          <SUHeader as='h2' textAlign='center'>
            S'inscrire!
          </SUHeader>
          <Segment >    
            <Form>  
              <Form.Field>
                <Form.Input 
                  value={form.prenom || ''}
                  onChange={onChange}
                  label="Prénom" 
                  type="text" 
                  name="prenom" 
                  placeholder="Prénom"
                  error={fieldErrors.prenom && {
                    content: fieldErrors.prenom,
                    pointing: "below"
                    } 
                  }
                  />
              </Form.Field>
              <Form.Field>
                <Form.Input 
                  value={form.nom || ''}
                  onChange={onChange}
                  label="Nom" 
                  type="text" 
                  name="nom" 
                  placeholder="Nom" 
                  error={fieldErrors.nom && {
                    content: fieldErrors.nom,
                    pointing: "below"
                    } 
                  }
                  />
              </Form.Field>
              <Form.Field>
                <Form.Input 
                  value={form.email || ''}
                  onChange={onChange}
                  label="Email" 
                  type="email" 
                  name="email" 
                  placeholder="Adresse email"
                  error={fieldErrors.email && {
                    content:fieldErrors.email,
                    pointing: "below"
                    }
                  } 
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
                  error={fieldErrors.password && {
                    content: fieldErrors.password,
                    pointing: "below"
                    } 
                  }
                  />
                  
              </Form.Field>
              <Button 
                disabled={!registerFormValid || loading} 
                onClick={onSubmit}
                loading={loading}
                type="submit" 
                primary
                fluid>S'inscrire</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
}

export default SignupUI
