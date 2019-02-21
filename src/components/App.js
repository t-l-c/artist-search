import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Search from './search/Search';


export default class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Search}/>
                </Switch>
            </Router>
        );
    }
}






