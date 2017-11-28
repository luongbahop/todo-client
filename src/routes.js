import React from 'react';
import { Redirect } from 'react-router';
import { Home, Todo, Auth } from './containers';
import Authentication from './auth';

function checkAuth(PAGE, from) {
  if (Authentication.checkStorage()) {
    return <PAGE />;
  } else {
    return (
      <Redirect to={{
        pathname: '/auth/login', state: { from }
      }} />
    );
  }
}

export const routes = [
  {
    'path': '/',
    'component': () => checkAuth(Home, '/'),
    'exact': true
  },
  {
    'path': '/todo',
    'component': () => checkAuth(Todo, '/todo'),
    'exact': false
  },
  //authentication
  {
    'path': '/auth/login',
    'component': Auth.Login,
    'exact': false
  },
  {
    'path': '/auth/register',
    'component': Auth.Register,
    'exact': false
  },
  {
    'path': '/protected',
    'component': () => (Authentication.checkStorage() ? (<Auth.Login />) : (<Redirect to={{
      pathname: '/login', state: { from: '/protected' }
    }} />))
  }
]