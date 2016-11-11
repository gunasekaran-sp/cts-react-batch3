import React, { Component } from 'react';
import NavLink from './NavLink'

class Repos extends Component {
    render() {
        return (
            <div className="well">
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3">
                        <ul className="nav stacked-nav">
                            <li> <NavLink to="/repo/1">repo-1</NavLink> </li>
                            <li> <NavLink to="/repo/2">repo-2</NavLink> </li>
                        </ul>
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-9">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Repos;