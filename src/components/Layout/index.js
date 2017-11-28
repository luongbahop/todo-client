import _ from 'lodash';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Visibility, Button
} from 'semantic-ui-react'
import { MenuWrap, MenuWrapContainer, MenuUl, MenuLi } from './styles';
const { images } = global.ASSETS || {};
const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}


export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuFixed: false,
      overlayFixed: false,
      activeItem: 'home'
    }
  }


  render() {
    const { activeItem } = this.state

    return (
      <div>
        <style>{`
          html, body {
            background: #fafbfb;
          }
        `}</style>

        <MenuWrap>
          <MenuWrapContainer>
          <Image size='mini' src={images.imglogo || ''} />
            <MenuUl>
              <MenuLi>Home</MenuLi>
              <MenuLi>Home</MenuLi>
            </MenuUl>
          </MenuWrapContainer>
        </MenuWrap>
        <Container style={{ marginTop: '85px' }} >
          {this.props.children}
        </Container>

        <Segment
          style={{ padding: '5em 0em' }}
          vertical
        >
          <Container textAlign='center'>
            <Divider inverted section />
            <Image src='/logo.png' centered size='mini' />
            <List horizontal inverted divided >
              <List.Item as='a' href='#'>Site Map</List.Item>
              <List.Item as='a' href='#'>Contact Us</List.Item>
              <List.Item as='a' href='#'>Terms and Conditions</List.Item>
              <List.Item as='a' href='#'>Privacy Policy</List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}
