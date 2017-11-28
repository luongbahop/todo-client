import React, { Component } from 'react';
import {  Grid, Header, Image, Message } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';

const { images } = global.ASSETS || {};
class Authentication extends Component {
 
  renderMessage() {
    let { type } = this.props;
    if (type === 'login') {
      return (
        <Message>
          Create a new account <NavLink to='/auth/register'>Sign Up</NavLink>
        </Message>
      )
    } else if (type === 'register') {
      return (
        <Message>
          You have an account <NavLink to='/auth/login'>Login</NavLink>
        </Message>
      )
    }
  }
  render() {
    let { title } = this.props;
    return (
      <div className='login-form'>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              <Image src={images.imglogo} onClick={()=>this.props.goHome()} />
              {title}
            </Header>
            {this.props.children}
            {this.renderMessage()}

          </Grid.Column>
        </Grid>
      </div>

    );
  }
}

export default Authentication;