import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    static defaultProps ={
        title: 'GitHub-Finder',
        icon: 'fab fa-github'
    }

    render() {
        return (
            <div>
                <h1>
                    <i className={this.props.icon}></i>{this.props.title}
                </h1>
            </div>
        );
    }
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;