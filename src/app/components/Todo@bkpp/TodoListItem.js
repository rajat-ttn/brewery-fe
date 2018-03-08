import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actionCreators';

function TodoListItem(props){
    return (
        <li>
            <small className={'is-completed'}>
                <input type='checkbox'
                       checked={props.item.isCompleted}
                       onChange={ (event) => {
                           props.updateTodo({
                               ...props.item,
                               isCompleted: event.target.checked
                           });
                       }  }>
                </input>
            </small>
            <span className={ (props.item.isCompleted ?'striked': null)  +  ' todo-text'}>{props.item.text}</span>
            <small
                onClick={() => { props.deleteTodo(props.item) }}
                className={'delete'}>
                X
            </small>
        </li>
    )
}


export default connect(null, actions)(TodoListItem);