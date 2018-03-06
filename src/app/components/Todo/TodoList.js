import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    render() {
        return (
            <div className="todo-list">
                <ul>
                    {this._renderListItems()}
                </ul>
            </div>
        );
    }
    _renderListItems = () => {
        return this.props.todoItems.map((item, index)=>{
            return <TodoListItem item={item} key={item.id} />
        })
    }
}

function mapStateToProps(state, ownProps){
    let filteredList;
    switch(state.filter){
        case 'ALL': filteredList = state.todoList;
            break;
        case 'COMPLETED': filteredList = state.todoList.filter((item) => item.isCompleted  );
            break;
        case 'ACTIVE': filteredList = state.todoList.filter((item) => !item.isCompleted  );
            break;
    }
    return {
        todoItems : filteredList
    }
}

export default connect(mapStateToProps)(TodoList);