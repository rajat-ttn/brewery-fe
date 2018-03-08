import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../css/bootstrap.css';
import { fetchBeerList } from './async.action';
import Header from '../Common/Header'
import ContainerComponent from '../ContainerComponent'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        const { fetchBeerList } = this.props;
        fetchBeerList();
    }
    
    render() {
        const { beerList } = this.props;
        return (
            <div className="pageLayout">
                <Header />
                <ContainerComponent beerList={beerList} />

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    beerList: state.beerList,
});

const mapDispatchToProps = (dispatch) => ({
    fetchBeerList: () => dispatch(fetchBeerList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);