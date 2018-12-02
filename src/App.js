import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Route from './routes';
import aytwStore from './store';

class AmpleApp extends Component {
    render() {
        return (
            <Provider store={aytwStore}>
                <Router>
                    <Route />
                </Router>
            </Provider>
        );
    }
}
export default AmpleApp;

