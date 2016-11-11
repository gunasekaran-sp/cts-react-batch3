
import React, { Component } from 'react'
import NavLink from './NavLink';
import Home from './Home'
import { IndexLink } from 'react-router';

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <IndexLink to="/">React - Routing</IndexLink>
                </div>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3">
                            <ul className="nav stacked-nav">
                                <li> <NavLink to="/about">About</NavLink> </li>
                                <li> <NavLink to="/repos">Repos</NavLink> </li>
                            </ul>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-9">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default App;