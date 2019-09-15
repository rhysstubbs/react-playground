import React from 'react';
import { Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileWink } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

class ToastContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true
        };
    }

    getFact() {

        const fact = this.props.facts[this.props.facts.length - 1];
    
        if (fact) {
            return (
                <Toast show={this.state.show} onClose={() => this.setState({ show: false })} className='toast' autohide delay={5000}>
                    <Toast.Header closeButton={false}>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto"><FontAwesomeIcon icon={faSmileWink} /></strong>
                        <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body>{fact}</Toast.Body>
                </Toast>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.getFact()}
            </React.Fragment>
        )
    }
}

ToastContainer.propTypes = {
    facts: PropTypes.array
}

ToastContainer.defaultProps = {
    facts: []
};

export default ToastContainer;