import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
const { Authentication } = global.COMPONENTS || {};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      validation: {},
      loading: false
    };
  }
  goHome() {
    this.props.history.push('/');
  }
  render() {
    return (
      <Authentication title="Register Page" type="register" goHome={() => this.goHome()}>
        <Helmet>
          <title>Register Page- Todo application</title>
          <meta name="description" content="A React.js Boilerplate Todo application" />
        </Helmet>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Full name'
            />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>Register</Button>
          </Segment>
        </Form>
      </Authentication>
    );
  }
}

export default Register;