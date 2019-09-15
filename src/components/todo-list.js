import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, ButtonGroup, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { remove, complete, edit } from '../store/action-creators/todos';

const mapDispatchToProps = {
    remove,
    complete,
    edit
};

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }

        this.complete = this.complete.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
    }

    complete(todo) {
        this.props.complete(todo);
    }

    delete(todo) {
        this.props.remove(todo);
    }

    edit(todo) {
        this.setState({
            showModal: true,
            modalData: todo
        });
    }

    getTodoList() {

        let todos = this.props.todos;

        if (todos.length === 0) {
            return (
                <Col>
                    <Alert variant={'info'}>You have not created any Todos yet!</Alert>
                </Col>
            )
        }

        if (this.props.search !== "") {
            todos = todos.filter(todo => todo.title.toLowerCase().includes(this.props.search.toLowerCase()));
        }

        if (!this.props.showCompleted) {
            todos = todos.filter(todo => todo.completed === false);
        } else {
            todos = todos.sort(function(x, y) {
                return x.completed === y.completed ? 0 : x.completed ? 1 : -1;
            });
        }

        return todos
            .map((todo, index) => {
                return (
                    <Col xs={12} sm={6} md={4} xl={3} key={index} className='mb-2'>
                        <Card border={todo.completed ? 'success' : 'primary'}>
                            <Card.Header className='d-flex'>#{index + 1}
                                {!todo.completed ? (<Button onClick={() => this.delete(todo)} variant='danger' size='sm' className='ml-auto'>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>) : (null)}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{todo.title}</Card.Title>
                                <Card.Text>{todo.content}</Card.Text>
                            </Card.Body>
                            {!todo.completed ? (
                                <Card.Footer>
                                    <ButtonGroup size="sm" className='w-100'>
                                        <Button onClick={() => this.complete(todo)} variant='success' className='w-50'><FontAwesomeIcon icon={faCheck} /></Button>
                                        <Button onClick={() => this.edit(todo)} variant='secondary' className='w-50'><FontAwesomeIcon icon={faEdit} /></Button>
                                    </ButtonGroup>
                                </Card.Footer>) : (null)}
                        </Card>
                    </Col>
                );
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
    order: PropTypes.string,
    search: PropTypes.string,
    showCompleted: PropTypes.bool
};

TodoList.defaultProps = {
    todos: [],
    order: null,
    search: null,
    showCompleted: false
}

export default connect(null, mapDispatchToProps)(TodoList);