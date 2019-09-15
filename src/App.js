import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import TodoContainer from './components/containers/todo-container';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddTodoModal from './components/modals/add-todo-modal';
import { add } from './store/action-creators/facts';
import { connect } from 'react-redux';
import ToastContainer from './components/containers/toast-container';

const mapDispatchToProps = {
  add
};

const mapStateToProps = state => {
  return {
    facts: state.facts,
  }
};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }

    this.addTodo = this.addTodo.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getFact = this.getFact.bind(this);
  }

  addTodo() {
    this.setState({
      showModal: true
    })
  }

  hideModal() {
    this.setState({
      showModal: false
    })
  }

  getFact() {
    this.props.add();
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid="true" className='pb-5'>
          <Row>
            <Col>
              <Jumbotron>
                <h1>Hello, world!</h1>
                <p>This is a simple React appliation for managing a list of todos.</p>
                <Button onClick={this.getFact} variant='primary'>Click for a random fact!</Button>
              </Jumbotron>
            </Col>
          </Row>

          <Row>
            <Col>
              <TodoContainer />
            </Col>
          </Row>

          <Button size="lg"
            variant="primary"
            className="btn-todo-add"
            title="Create Todo"
            onClick={this.addTodo}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>

          <ToastContainer facts={this.props.facts} />

          <AddTodoModal show={this.state.showModal} onHide={this.hideModal} />
        </Container>
      </React.Fragment>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);