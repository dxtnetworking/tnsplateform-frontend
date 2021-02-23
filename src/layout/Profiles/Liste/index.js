import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import {
  Grid, 
  Header as SUHeader, 
  Placeholder,
  Image,
  Table,
  Header,
  Message} from 'semantic-ui-react';
import { GlobalContext } from '../../../context/Provider';

const ProfilesListUI = ({state: { profiles: {loading, data, error} }}) => {
    const {profileDispatch} = useContext(GlobalContext);
    return (
      <Grid centered style={{ height: '100vh' }} >
        <Grid.Column  style={{ maxWidth: 650 }}>
          <SUHeader as='h2' textAlign='center'>
            Membres du réseau
          </SUHeader>
            
            {loading && <>
              <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder></>
            }

            {data.length && 
            <Fragment>
            <Table  basic='very' selectable collapsing>
                <Table.Header>
                 <Table.Row>
                   <Table.HeaderCell>Membres</Table.HeaderCell>
                   <Table.HeaderCell>Niveau d'étude</Table.HeaderCell>
                   <Table.HeaderCell>Membre Equipe Pilote</Table.HeaderCell>
                 </Table.Row>
               </Table.Header>
               <Table.Body>
                {data.map((profile) => (
                <Table.Row  key={profile.id}>
                  <Table.Cell>
                    <Link to={`/profiles/${profile.id}`} onClick={() => profileDispatch({payload: profile})}>
                    <Header as='h4' image>
                      <Image src={profile.user.image} circular size='medium' />
                      <Header.Content>
                        {profile.user.prenom} {profile.user.nom}
                        <Header.Subheader>{profile.profession}</Header.Subheader>
                      </Header.Content>
                    </Header>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{profile.niveau_etude} </Table.Cell>
                  <Table.Cell>
                    {profile.membre_equipe_pilote &&
                    <input type="checkbox" checked disabled/>} 
                    {!profile.membre_equipe_pilote &&
                    <input type="checkbox" disabled/>} 
                  </Table.Cell>
                </Table.Row>               
                ))}
              </Table.Body>
            </Table>
            </Fragment>
            }
            {!data.length && !loading &&
              <Message warning>Désolé, aucune donnée disponible</Message>}
        </Grid.Column>
      </Grid>
    )
}

export default ProfilesListUI
