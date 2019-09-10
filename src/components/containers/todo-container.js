import React from 'react';
import TodoList from '../todo-list';
import { Row, Col, ButtonToolbar, InputGroup, FormControl, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
};

class TodoContainer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col className='justify-content-start'>
                        <Form inline={true}>
                            <ButtonToolbar className="mb-3">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="btnGroupAddon">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type="text"
                                        placeholder="Search Todos"
                                        aria-label="Search Todos"
                                        aria-describedby="btnGroupAddon"
                                    />
                                </InputGroup>
                            </ButtonToolbar>
                        </Form>
                    </Col>

                    <Col>
                        <Form inline={true} className='justify-content-end'>
                            <Form.Group controlId="formGridState">
                                <Form.Control as="select">
                                    <option>Sort By</option>
                                    <option value='dsc'>Date Descending</option>
                                    <option value='asc'>Date Ascending</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <TodoList todos={this.props.todos} />
            </React.Fragment>
        )
    }

}

export default connect(mapStateToProps)(TodoContainer);