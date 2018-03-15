import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ContainerComponent from './components/ContainerComponent';
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
                <ContainerComponent />
            </Provider>
        );
    }
}

export default App;