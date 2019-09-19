import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    static defaultProps ={
        title: 'GitHub-Finder',
        icon: 'fab fa-github'
    }

    render() {
        return (
            <nav className="navbar bg-dark">
                <h1>
                    <i className={this.props.icon}/>{this.props.title}
                </h1>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;