import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Dashboard from './components/Dashboard';
import store from './store';
import '../css/App.css';
import '../css/bootstrap.css';
import NotificationService from './service/notificationService'

class App extends Component {

    componentDidMount(){
        NotificationService.requestPermission();
    }

    render() {
        return (
            <Provider store={store}>
                <Dashboard />
            </Provider>
        );
    }
}

export default App;