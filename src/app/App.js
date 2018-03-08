import React, { Component } from 'react';
import { Provider } from 'react-redux';

import '../css/App.css';
import '../css/bootstrap.css';
import Dashboard from './components/Dashboard';
import store from './store';
import * as actions from './common/action';

import socket from './socket';

class App extends Component {

    componentDidMount() {
        socket.on("CONTAINER_TEMPERATURE_CHANGE", (data) => {
            console.log("data --------->",data)
            store.dispatch(actions.updateBeerTemperature(data));
        });
    }

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
