

// import './api/client';
// import './helpers/helpers';
// import './helpers/uuid';


import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory , browserHistory, IndexRoute} from 'react-router';

import App from './components/App'
import About from './components/About'
import Repos from './components/Repos'
import Repo from './components/Repo'
import Home from './components/Home'

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={Home}/>
                <Route path="/about" component={About} />
                <Route path="/repos" component={Repos}>
                    <Route path="/repo/:repoID" component={Repo} />
                    <Route path="/repo/:repoID" component={Repo} />
                </Route>    
            </Route>
        </Router>    
    )
    , document.getElementById('root'));

