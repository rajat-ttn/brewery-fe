import React, { Component } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

class TodoContainer extends Component {
    render() {
        return (
            <div className="todo-container">
                <AddTodo></AddTodo>
                <TodoList></TodoList>
                <Filter></Filter>
            </div>
        );
    }
}

export default TodoContainer;