
import React, { Component } from 'react'
import MessageList from './MessageList'

class App extends Component {

    constructor() {
        super();
        this.state = { messages: ["Message-1", 'Message-2'] };
    }

    createNewMessage() {
        this.setState({ messages: this.state.messages.concat('new-message') });
    }

    deleteAllMessages() {
        this.setState({ messages: [] });
    }

    render() {
        if (this.state.messages.length !== 0) {
            return (
                <div className="">
                    <MessageList messages={this.state.messages} />
                </div>
            );
        } else {
            return (
                <div className="">
                </div>
            )
        }

    }

}

export default App;