
import React, { Component } from 'react'
import Button from './Button'
import Result from './Result'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { counter: 10 };
    }

    incrementCounter(incCount) {
        this.setState({ counter: this.state.counter + incCount });
    }

    render() {
        return (
            <div className="counter">
                <hr />
                <Result counter={this.state.counter} />
                <hr />
                <Button handleClick={this.incrementCounter.bind(this)} increment={1} />
                <Button handleClick={this.incrementCounter.bind(this)} increment={-1} />
            </div>
        );

    }

}

export default App;