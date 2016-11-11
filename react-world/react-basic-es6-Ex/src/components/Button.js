

import React, { Component } from 'react'

class Button extends Component {

    render() {
        return (
            <button onClick={this.props.handleClick.bind(null, this.props.increment)}>
                + {this.props.increment}
            </button>
        );
    }

}

export default Button;