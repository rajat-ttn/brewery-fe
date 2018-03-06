import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import TodoContainer from './components/Todo/TodoContainer.js';
import {Provider} from 'react-redux'; //← Bridge React and Redux
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React Todo App</h1>
                    </header>
                    <p className="App-intro">
                        Add Todos!
                    </p>
                    <TodoContainer></TodoContainer>
                </div>
            </Provider>
        );
    }
}

export default App;