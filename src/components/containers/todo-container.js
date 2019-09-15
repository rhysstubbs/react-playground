import React from 'react';
import TodoList from '../todo-list';
import { Row, Col, ButtonToolbar, InputGroup, FormControl, Form, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
};

class TodoContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sortOrder: null,
            search: "",
            showCompleted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCheck(event) {
        this.setState({
            showCompleted: event.target.checked
        });
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col className='justify-content-start' sm={9}>
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
                                            name="search"
                                            value={this.state.search}
                                            onChange={this.handleChange}
                                        />
                                    </InputGroup>
                                    <Form.Check value={this.state.showCompleted} onChange={this.handleCheck} name="showCompleted" type="checkbox" label="See Completed" className="ml-2"/>
                                </ButtonToolbar>
                        </Form>
                    </Col>

                    <Col sm={3}>
                        <Form inline={true} className='justify-content-end'>
                            <Form.Group controlId="formGridState">
                                <Form.Control as="select" name="sortOrder">
                                    <option>Sort By</option>
                                    <option value='dsc'>Date Descending</option>
                                    <option value='asc'>Date Ascending</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <TodoList todos={this.props.todos}
                    order={this.state.sortOrder}
                    search={this.state.search}
                    showCompleted={this.state.showCompleted}
                />
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(TodoContainer);