import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../css/App.css';
import '../css/bootstrap.css';
import Dashboard from './components/Dashboard';
import store from './store';

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
