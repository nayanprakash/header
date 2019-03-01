import './header.css';
import propTypes from 'prop-types';
import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                Header {this.props.name}
            </div>
        )
    }
}

Header.propTypes = {
    name: propTypes.string.isRequired
}
export default Header;