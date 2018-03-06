import React, { Component } from 'react';
import * as actions from './actionCreators';
import { connect } from 'react-redux';

class Filter extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className={'filter'}>
                <span>{`total ${this.props.totalItemsCount}`}</span>
                <a onClick={() => this.props.applyFilter('ALL') }>All</a>
                <a onClick={() => this.props.applyFilter('ACTIVE') }>Active</a>
                <a onClick={() => this.props.applyFilter('COMPLETED') }>Completed</a>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        totalItemsCount: state.todoList.length
    }
}

export default connect(mapStateToProps, actions)(Filter);