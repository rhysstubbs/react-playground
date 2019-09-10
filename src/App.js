import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import TodoContainer from './components/containers/todo-container';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons'

/**
 * Constants
 */
function App() {
  return (
    <React.Fragment>
      <Container fluid="true" className='pb-5'>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Hello, world!</h1>
              <p>This is a simple React appliation for managing a list of todos.</p>
              <Button onClick={() => {}} variant='primary'>Click for a <FontAwesomeIcon icon={faCat} /> fact!</Button>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col>
            <TodoContainer/>
          </Col>
        </Row>

      </Container>
    </React.Fragment>
  );
}

export default App;
