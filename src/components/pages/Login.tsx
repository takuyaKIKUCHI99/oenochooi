import React, { FC } from 'react';
import { Button, Grid, Header, Icon } from 'semantic-ui-react';

const Login: FC = () => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h1">Login</Header>
      <Button basic fluid style={{ marginBottom: '0.5rem' }}>
        <Icon name="google" /> Googleアカウントでログイン
      </Button>
      <Button basic fluid style={{ marginBottom: '0.5rem' }}>
        <Icon name="phone" /> 電話番号でログイン
      </Button>
      <Button basic fluid>
        <Icon name="user secret" /> 匿名でログイン
      </Button>
    </Grid.Column>
  </Grid>
);

export default Login;
