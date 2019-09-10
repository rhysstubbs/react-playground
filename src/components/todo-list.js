import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, ButtonGroup, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'

class TodoList extends React.Component {

    complete() {
        console.log("Completing");
    }

    delete() {
        console.log("Deleting");
    }

    getTodoList() {

        if (this.props.todos.length === 0) {
            return (
                <Col>
                    <Alert variant={'info'}>You have not created any Todos yet!</Alert>
                </Col>
            )
        }

        return this.props.todos.map((todo, index) => {
            return (
                <Col xs={12} sm={6} md={4} xl={3} key={index} className='mb-2'>
                    <Card>
                        <Card.Header className='d-flex'>#{index + 1}
                            <Button onClick={this.delete} variant='danger' size='sm' className='ml-auto'>
                                <FontAwesomeIcon icon={faTrash} />
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{todo.title}</Card.Title>
                            <Card.Text>{todo.content}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <ButtonGroup size="sm" className='w-100'>
                                <Button onClick={this.complete} variant='success' className='w-50'><FontAwesomeIcon icon={faCheck} /></Button>
                                <Button variant='secondary' className='w-50'><FontAwesomeIcon icon={faEdit} /></Button>
                            </ButtonGroup>
                        </Card.Footer>
                    </Card>
                </Col>

            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    {this.getTodoList()}
                </Row>
            </React.Fragment>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.array,
    sort: PropTypes.string,
    search: PropTypes.string
};

TodoList.defaultProps = {
    todos: [],
    sort: null,
    search: null
}

export default TodoList;