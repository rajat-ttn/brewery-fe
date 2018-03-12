import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Dashboard from './components/Dashboard';
import store from './store';
import '../css/App.css';
import '../css/bootstrap.css';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );
    }
}

export default App;