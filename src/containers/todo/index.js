import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Tab, Form, Segment, Button, Grid, Message, Dimmer, Loader, Confirm } from 'semantic-ui-react';
const { Layout } = global.COMPONENTS || {};
const { types } = global.UTILS || {};
let FaEdit = require('react-icons/lib/fa/edit');
let FaTimesCircle = require('react-icons/lib/fa/times-circle');
let FaRotateLeft = require('react-icons/lib/fa/rotate-left');



// map data of redux
const mapStateToProps = state => {
  const { todo } = state;
  return {
    todo
  };
};
class Todo extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      confirm: false,
      list: [],
      input: {},
      validation: [],
      isFetch: false,
      isSave: false
    };
  }

  componentDidMount() {
    this.fetch();
  }
  fetch() {
    this.setState({ isFetch: true });
    this.props.dispatch({ type: 'TODO_FETCH' });
  }
  componentWillReceiveProps(props) {
    let { todo } = props;

    if (todo.action.indexOf('TODO') >= 0) {
      switch (todo.action) {
        //fetch
        case types.todo.TODO_FETCH_SUCCESS: {
          if (typeof todo.data === 'undefined' || todo.data === 'undefined') todo.data = [];
          if (todo.action)
            this.setState({
              list: todo.data,
              isFetch: false
            })
          break;
        }
        case types.todo.TODO_FETCH_FAILUE: {
          this.setState({
            list: todo.data,
            loading: false
          })
          break;
        }
        //save
        case types.todo.TODO_SAVE_SUCCESS: {
          this.fetch();
          this.setState({ input: {}, isSave: todo.isSave });
          break;
        }
        case types.todo.TODO_SAVE_FAILUE: {
          this.setState({
            loading: false,
            isSave: todo.isSave
          })
          break;
        }
        //delete
        case types.todo.TODO_DELETE_SUCCESS: {
          this.fetch();
          break;
        }
        case types.todo.TODO_DELETE_FAILUE: {
          this.setState({
            loading: false,
          })
          break;
        }
        default: break;
      }
    }

  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  changeInput(value, field) {
    this.setState({
      input: Object.assign({}, this.state.input, { [field]: value.target.value })
    })
  }

  onSubmit() {
    let editable = false;
    let params = this.state.input;
    if (typeof params.title === 'undefined' || params.title === '') {
      let { validation } = this.state;
      validation.length = 0;
      validation.push('Title is required');
      this.setState({
        validation
      })
      return false;
    }
    params.status = 'todo';
    this.setState({ validation: [], isSave: true });
    this.props.dispatch({ type: 'TODO_SAVE', params, editable });
  }

  onDelete() {
    this.props.dispatch({ type: 'TODO_DELETE', ID: this.state.ID });
    this.setState({ confirm: false })
  }
  onConfirm(ID) {
    this.setState({ confirm: true, ID })
  }
  onChangeStatus(ID, status) {
    let editable = true;
    let params = {
      ID,
      status: status === 'todo' ? 'complete' : 'todo',
    }
    this.props.dispatch({ type: 'TODO_SAVE', params, editable });
  }

  renderAllTodo(type = 'all') {
    let { data } = this.state.list;
    let todoArr = [];
    if (typeof data !== 'undefined' && data !== 'undefined') {
      data.map((val, index) => {
        let clr = val.status === 'todo' ? 'red' : 'green';
        if (type === 'all') {
          todoArr.push(
            <Segment color={clr} key={val._id}>
              <h5>
                {val.title}
              </h5>
              <p>  {val.description}</p>
              <Button size='mini' basic className="right" style={{ margin: 3 }} color="yellow"><FaEdit /></Button>
              <Button onClick={() => this.onConfirm(val._id)} size='mini' basic className="right" style={{ margin: 3 }} color="red"><FaTimesCircle /></Button>
              <Button onClick={() => this.onChangeStatus(val._id, val.status)} size='mini' basic className="right" style={{ margin: 3 }} color="blue"><FaRotateLeft /></Button>

            </Segment>
          );
        } else if (type === 'todo') {
          if (val.status === type) {
            todoArr.push(
              <Segment color='red' key={val._id}>
                <h5>
                  {val.title}
                </h5>
                <p>  {val.description}</p>
                <Button size='mini' basic className="right" style={{ margin: 3 }} color="yellow"><FaEdit /></Button>
                <Button onClick={() => this.onConfirm(val._id)} size='mini' basic className="right" style={{ margin: 3 }} color="red"><FaTimesCircle /></Button>
                <Button onClick={() => this.onChangeStatus(val._id, val.status)} size='mini' basic className="right" style={{ margin: 3 }} color="blue"><FaRotateLeft /></Button>

              </Segment>
            );
          }

        }
        else if (type === 'complete') {
          if (val.status === type) {
            todoArr.push(
              <Segment color='green' key={val._id}>
                <h5>
                  {val.title}
                </h5>
                <p>  {val.description}</p>
                <Button size='mini' basic className="right" style={{ margin: 3 }} color="yellow"><FaEdit /></Button>
                <Button onClick={() => this.onConfirm(val._id)} size='mini' basic className="right" style={{ margin: 3 }} color="red"><FaTimesCircle /></Button>
                <Button onClick={() => this.onChangeStatus(val._id, val.status)} size='mini' basic className="right" style={{ margin: 3 }} color="blue"><FaRotateLeft /></Button>

              </Segment>
            );
          }
        }
        return todoArr;
      });
      if (todoArr.length === 0) todoArr.push(<p>There is no data to display.</p>);
     
    }

    return (
      <div>
        <Loader active={this.state.isFetch} inline='centered' />
        {todoArr}
      </div>
    );

  }
  renderError() {
    let { validation } = this.state;
    let errorArr = [];
    validation.map((val, index) => {
      errorArr.push(
        <Message negative>
          <Message.Header><strong>Oh snap!</strong> {val}</Message.Header>
        </Message>

      );
      return errorArr;
    })

    return (
      <div>
        {errorArr}
        <br />
      </div>
    )
  }
  render() {
    const panes = [
      { menuItem: { key: 'todo', icon: 'users', content: 'To-do' }, render: () => <Tab.Pane>{this.renderAllTodo('todo')}</Tab.Pane> },
      { menuItem: { key: 'complete', icon: 'users', content: 'Complete' }, render: () => <Tab.Pane>{this.renderAllTodo('complete')}</Tab.Pane> },
      { menuItem: { key: 'all', icon: 'users', content: 'All tasks' }, render: () => <Tab.Pane>{this.renderAllTodo('all')}</Tab.Pane> },
    ]
    return (
      <Layout >
        <Helmet>
          <title>Todo Page- Todo application</title>
          <meta name="description" content="A React.js Boilerplate Todo application" />
        </Helmet>
        <Dimmer >
          <Loader>Loading</Loader>
        </Dimmer>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                {this.renderError()}
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input onChange={(val) => this.changeInput(val, 'title')} label='Title' value={this.state.input.title || ''} placeholder='Enter task' />
                  </Form.Group>
                  <Form.TextArea onChange={(val) => this.changeInput(val, 'description')} label='Description' value={this.state.input.description || ''} placeholder='Enter task description...' />

                  <Form.Button color='green' onClick={() => this.onSubmit()}>Submit</Form.Button>
                </Form>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Tab panes={panes} />
            </Grid.Column>
          </Grid.Row>
          <Confirm
            open={this.state.confirm}
            onCancel={() => this.setState({ confirm: false })}
            onConfirm={(ID) => this.onDelete(ID)}
          />
        </Grid>


      </Layout>
    );
  }
}

export default connect(mapStateToProps)(Todo);