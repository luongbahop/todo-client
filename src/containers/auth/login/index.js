import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Segment, Message, Dimmer, Loader } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
const { Authentication } = global.COMPONENTS || {};
const { types } = global.UTILS || {};


// map data of redux
const mapStateToProps = state => {
  const { auth, todo } = state;
  return {
    auth,
    todo
  };
};
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {},
      validation: {},
      message: {
        hidden: true,
        content: '',
        type: 'negative'
      },
      loading: false
    };
  }
  componentWillMount() {
    const { auth } = this.props;
    if (auth.isLogged || JSON.parse(localStorage.getItem('authentication'))) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(props) {
    let { auth } = props;

    if (auth.action.indexOf('AUTH') >= 0) {
      switch (auth.action) {
        //login
        case types.auth.AUTH_LOGIN_SUCCESS: {
          this.setState({
            message: {
              open: true,
              type: 'positive',
              content: 'Login successfully'
            },
          });
          setTimeout(() => {
            this.setState({
              loading: false
            });
            this.props.history.push('/');
          }, 3000);

          break;
        }
        case types.auth.AUTH_LOGIN_FAILURE: {
          this.setState({
            message: {
              open: true,
              type: 'negative',
              content: auth.error.message
            },
            loading: false
          });
          break;
        }

        default: break;
      }
    }

  }
  goHome() {
    this.props.history.push('/');
  }
  onDismiss() {
    this.setState({
      message: {
        hidden: true
      }
    });
  }

  changeInput(val, field) {
    let { validation } = this.state;

    //validate email
    if (field === 'email') {
      let email_regular = /\S+@\S+\.\S+/;
      let { email } = this.state.input;
      if (val.target.value === '' || !email_regular.test(email)) validation.email = true;
      else validation.email = false;
    }

    //validate Password
    if (field === 'password') {
      if (val.target.value === '' || val.target.value.length < 5) validation.password = true;
      else validation.password = false;
    }


    this.setState({
      input: Object.assign({}, this.state.input, { [field]: val.target.value }),
      validation
    })
  }

  onSubmit() {
    let params = this.state.input;
    params.strategy = 'local';
    this.props.dispatch({ type: 'AUTH_LOGIN', params });
    this.setState({
      loading: true
    });
  }



  render() {

    return (
      <Authentication title="Login Page" type="login" goHome={() => this.goHome()}>
        <Helmet>
          <title>Login Page- Todo application</title>
          <meta name="description" content="A React.js Boilerplate Todo application" />
        </Helmet>
        <Form size='large'>
          <Message
            {...{ [this.state.message.type]: true }}
            hidden={this.state.message.hidden}
            onDismiss={() => this.onDismiss()}
            content={this.state.message.content}
          />
          <Segment stacked>
            <Dimmer active={this.state.loading} inverted>
              <Loader />
            </Dimmer>
            <Form.Input
              fluid
              error={this.state.validation.email}
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              onChange={(val) => this.changeInput(val, 'email')}
            />
            
            <Form.Input
              fluid
              error={this.state.validation.password}
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={(val) => this.changeInput(val, 'password')}
            />

            <Button color='teal' fluid size='large' onClick={() => this.onSubmit()}>Login</Button>
          </Segment>
        </Form>
      </Authentication>
    );
  }
}
export default connect(mapStateToProps)(Login);