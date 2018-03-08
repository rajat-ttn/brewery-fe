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
            <div>
                <Header />
                <div className="pageLayout">
                <ContainerComponent beerList={beerList} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    beerList: state.beerData.beerList,
});

const mapDispatchToProps = (dispatch) => ({
    fetchBeerList: () => dispatch(fetchBeerList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);