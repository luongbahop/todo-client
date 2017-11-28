//=== import external ===
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Grid, Input, Label, Menu, Card, Image, Button } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import { HomeContent } from './styles';
import  'react-responsive-carousel/lib/styles/carousel.min.css';

//=== import internal ===
const { Layout } = global.COMPONENTS || {};

// const  { actions } = global.UTILS;

// map data of redux
const mapStateToProps = state => {
  const { auth, todo } = state;
  return {
    auth,
    todo
  };
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.props.dispatch({ type: 'TODO_FETCH' });
  }
  onLogout() {
    this.props.dispatch({ type: 'AUTH_LOGOUT' });
  }
  render() {
    return (
      <Layout >
        <Helmet>
          <title>Home Page- Todo application 123</title>
          <meta name="description" content="A React.js Boilerplate Todo application" />
        </Helmet>
        <Container>
          <Grid>
            <Grid.Column computer={4} mobile={16} tablet={4}>
              <Menu fluid vertical>
                <Menu.Item name='inbox' onClick={this.handleItemClick}>
                  <Label color='teal'>1</Label>
                  Inbox
                </Menu.Item>

                <Menu.Item name='spam' onClick={this.handleItemClick}>
                  <Label>51</Label>
                  Spam
                </Menu.Item>

                <Menu.Item name='updates' onClick={this.handleItemClick}>
                  <Label>1</Label>
                  Updates
                </Menu.Item>
                <Menu.Item>
                  <Input icon='search' placeholder='Search mail...' />
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column computer={12} mobile={16} tablet={12}>
            <Carousel>
                  <div>
                    <img alt="" src="http://tungtung.vn/static/home/sliders/slider_3.jpg" />
                  </div>
                  <div>
                    <img alt=""  src="http://tungtung.vn/static/home/sliders/slider_4.jpg" />
                  </div>
                  <div>
                    <img alt=""  src="http://tungtung.vn/static/home/sliders/slider_1.jpg" />
                  </div>
                </Carousel>
            </Grid.Column>
            
          </Grid>
          <Grid >
           
            <Grid.Row>
              <Card
                image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
              <Card
                image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
              <Card
                image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
              <Card
                image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
              <Card
                image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
              <Card
                image='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
            </Grid.Row>
            <Grid.Row>

              <Card.Group>
                <Card>
                  <Card.Content>
                    <Image floated='right' size='mini' src='http://media.tungtung.vn/uploads/1_1506136841138.png' />
                    <Card.Header>
                      Steve Sanders
        </Card.Header>
                    <Card.Meta>
                      Friends of Elliot
        </Card.Meta>
                    <Card.Description>
                      Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>Approve</Button>
                      <Button basic color='red'>Decline</Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image floated='right' size='mini' src='http://media.tungtung.vn/uploads/1_1506136841138.png' />
                    <Card.Header>
                      Molly Thomas
        </Card.Header>
                    <Card.Meta>
                      New User
        </Card.Meta>
                    <Card.Description>
                      Molly wants to add you to the group <strong>musicians</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>Approve</Button>
                      <Button basic color='red'>Decline</Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image floated='right' size='mini' src='http://media.tungtung.vn/uploads/1_1506136841138.png' />
                    <Card.Header>
                      Jenny Lawrence1
        </Card.Header>
                    <Card.Meta>
                      New User
        </Card.Meta>
                    <Card.Description>
                      Jenny requested permission to view your contact details
        </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='green'>Approve</Button>
                      <Button basic color='red'>Decline</Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Row>

          </Grid>

        </Container>
        <HomeContent>
          <h2 onClick={() => this.onLogout()}>Introduce</h2>
          <p>
            Hello guys, My name is Hop, I am a full stack developer at Fsoft company. However, I am still lack of full stack javascript knowedge.
              In the pass, I worked as a front-end position at Qsoft company which taught me a lot of experiences. I have experienced work with ReactJs, React Native.
              When I had free time, I tried to learn Angular 2, Ionic 2 to build a hybird app. I do not know why but I have a lot of feelings with hybird app.<br />

            Today, I am going to build a todo app that to practice all technologies I have to learn for new project I will join if I pass an interview of a customer.<br /><br />
            <b>I am on my way to become a real full stack developer. I hope that I will be full stack man in early day in the future.</b>
          </p>
          <h2>Technologies</h2>
          <p>
            I separte to 2 sides to develop and learn that include front-end and back-end.
          </p>
          <h4>- Front-end:</h4>
          <ul>
            <li>
              The lastest ReactJs version at the moment is 16. I combine ReactJs with redux, redux-saga to complete app. Redux-saga is new with me, I do not have experience with this one,
                    before I usually use redux-thunk. Ofcoure, In the project, I'll write unit test and follow test driven development.
                  </li>
            <li>
              In order to make this app more beautiful and stable, I'll use react router v4, boostrap v4, material-ui, font awesome.
                   </li>
          </ul>
          <h4>- Back-end:</h4>
          <ul>
            <li>
              In fact, I am newbie. I told myself a lot of times that learn to build an API that use nodejs. At the moment, I have to build my own one. I tried learn expressJs, mongooseJs, body-parse...
                   And I am using feathers Framework that is very power.
                  </li>
          </ul>
          <h4>- CI/CD:</h4>
          <ul>
            <li>
              1
                  </li>
          </ul>
          <h4>- Deployment:</h4>
          <ul>
            <li>
              2
                  </li>
          </ul>
          <h2>Inclusion</h2>
          <p>
            I'll try my best to complete my application and now I feel better a lot than before I write this.<br />
            Link gitlab: <a href="https://gitlab.com/hop23typhu/project-todo">https://gitlab.com/hop23typhu/project-todo</a><br />
            Link app: <a href="https://project-todo-app-2017.herokuapp.com/">https://project-todo-app-2017.herokuapp.com/</a><br />
            Link api: <a href="https://project-todo-api-2017.herokuapp.com/">https://project-todo-api-2017.herokuapp.com/</a><br />
          </p>
        </HomeContent>
      </Layout>
    );
  }
}
//export default (Home);
export default connect(mapStateToProps)(Home);