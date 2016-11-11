import React, { Component } from 'react';
import Button from './Button';

class Message extends Component {
    render() {
        console.log('Message:render');
        return (
            <div>
                {this.props.message} <Button />
                {this.props.children}
                <hr/>
            </div>
        );
    }
}


Message.propTypes = {
    message: React.PropTypes.string
}

Message.defaultProps = {
    message: 'Nil'
}


export default Message;