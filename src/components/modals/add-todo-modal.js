import React from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { add } from '../../store/action-creators/todos'

const mapDispatchToProps = {
    add
};

class AddTodoModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            loading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSave(event) {
        event.preventDefault();
        this.setState({ loading: true });

        const payload = {
            id: Math.random(),
            created_at: "",
            updated_at: "",
            title: this.state.title,
            content: this.state.content,
            completed: false
        };

        this.props.add(payload);

        this.props.onHide();
        this.setState({ loading: false });
    }

    render() {
        return (
            <React.Fragment>
                <Modal show={this.props.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton={true}>
                        <Modal.Title>Add Todo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSave}>
                            <Form.Group controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.title} type="text" placeholder="Enter title" name="title" />
                                <Form.Text className="text-muted">
                                    A short name to describe the todo.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formContent">
                                <Form.Label>Content</Form.Label>
                                <Form.Control onChange={this.handleChange} value={this.state.content} as="textarea" rows="3" placeholder="Enter content" name="content" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                <span className={this.state.loading ? 'd-none' : 'd-block'}>
                                    <FontAwesomeIcon icon={faSave} className="mr-2" />Save
                                </span>
                                <span className={this.state.loading ? 'd-block' : 'd-none'}>
                                    <Spinner animation="border" variant="light" size="sm" className="mr-2" />Saving
                                </span>
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}

AddTodoModal.propTypes = {
    show: PropTypes.bool,
    onHide: PropTypes.func,
    modelData: PropTypes.object
};

AddTodoModal.defaultProps = {
    show: false,
    modelData: null
}

export default connect(null, mapDispatchToProps)(AddTodoModal);