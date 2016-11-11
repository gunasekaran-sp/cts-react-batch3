import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button style={{color:this.context.color}}>View</button>
            </div>
        );
    }
}

Button.contextTypes = {
    color:React.PropTypes.string
}

export default Button;