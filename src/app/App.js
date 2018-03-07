import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../css/App.css';
import TodoContainer from './components/Todo/TodoContainer.js';
import Dashboard from './components/Dashboard';
import store from './store';

class App extends Component {
    
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Dashboard />
                </div>
            </Provider>
        );
    }
}

export default App;
