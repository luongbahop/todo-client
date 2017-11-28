import React, { Component } from 'react';
import {
  Container, Divider, Image, List, Segment,
} from 'semantic-ui-react'
import { MenuWrap, MenuWrapContainer, MenuUl, MenuLi } from './styles';
const { images } = global.ASSETS || {};



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
