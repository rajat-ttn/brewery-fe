import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import '../../../css/bootstrap.css';
import { fetchBeerList } from './async.action';
import { setTemperatureType } from '../Common/RunTimeConfig/action';
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

    changeTemperatureType = event => {
        const updatedTempType = event.target.value;
        const { setTemperatureType } = this.props;
        if(updatedTempType){
            setTemperatureType(updatedTempType)
        }
    }
    
    render() {
        const { beerList, temperatureType } = this.props;
        return (
            <div>
                <Header />
                <div className="pageLayout">
                <ContainerComponent beerList={beerList} temperatureType={temperatureType} changeTemperatureType={this.changeTemperatureType} />
                </div>
            </div>
        );
    }
}

Dashboard.defaultProps = {
    beerList: [],
};

Dashboard.propTypes = {
    fetchBeerList: PropTypes.func.isRequired,
    setTemperatureType: PropTypes.func.isRequired,
    temperatureType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    beerList: state.beerList,
    temperatureType: state.temperatureType.temperatureType,
});

const mapDispatchToProps = (dispatch) => ({
    fetchBeerList: () => dispatch(fetchBeerList()),
    setTemperatureType: (value) => dispatch(setTemperatureType(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);