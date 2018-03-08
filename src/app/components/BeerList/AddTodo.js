import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actionCreators';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoText:''
        }
    }
    render() {
        return (
            <div className={'add-todo'}>
                <input type='text' value={this.state.todoText} onChange={this._onTextChange}/>
                <button onClick={this._addTodo}>{'Add Todo'}</button>
            </div>
        );
    }
    _onTextChange = (event)=> {
        this.setState({todoText:event.target.value});
    }
    _addTodo = (event)=> {
        this.props.addTodo({
            text:this.state.todoText,
            isCompleted: false
        })
        this.setState({todoText:''});
    }
}

function mapStateToProps(state, ownProps){
    return {
    }
}

export default connect(mapStateToProps, actions)(AddTodo);