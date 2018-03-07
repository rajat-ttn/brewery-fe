import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './action';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <div>Dashboard</div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        beerList: state.beerList,
    }
}

export default connect(mapStateToProps, actions)(Dashboard);