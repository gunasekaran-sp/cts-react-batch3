import React, { Component } from 'react';
import Message from './Message'

class MessageList extends Component {

    constructor(props) {
        super(props);
        console.log('MessageList:constructor');
        //this.state = {messages:props}
    }

    getChildContext() {
        return {
            color:'blue'
        };
    }

    componentWillMount() {
        console.log('MessageList:componentWillMount');
    }

    componentDidMount() {
        console.log('MessageList:componentDidMount');
        // access DOM Nodes
        // network request..
        // this.setState({color:'blue'});
        // this.state.messages = []; //  this will not trigger re-render , this.setState({})
    }

    componentWillReceiveProps(nextProps) {
        console.log('MessageList:compponentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('MessageList:shouldComponentUpdate');
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('MessageList:componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('MessageList:componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('MessageList:componentWillUnmount');
    }


    render() {
        console.log('MessageList:render');
        const messages = this.props.messages.map((message,index) => { 
            return (
                <Message key={index} message={message}>
                    <div> author : Nag </div>
                    <div>Email : nag@gmail.com</div>
                </Message>    
            );
        });
        return (
            <div>
                {messages}
            </div>
        );
    }
}


MessageList.childContextTypes = {
    color:React.PropTypes.string
}

export default MessageList;



/*
  
    component re-render methods
    ---------------------------

    this.setState();
    this.forceUpdate();

*/