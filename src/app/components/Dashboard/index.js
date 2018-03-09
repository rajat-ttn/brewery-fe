import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import '../../../css/bootstrap.css';
import { fetchBeerList } from './async.action';
import { setTemperatureType } from '../Common/RunTimeConfig/action';
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import BeerComponent from '../BeerComponent';
import TemperatureFilter from './temperatureFilter';

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
                    <div className="dropdownSection">
                        <TemperatureFilter temperatureType={temperatureType} changeTemperatureType={this.changeTemperatureType}/>
                    </div>
                    <div className="colorInfoWrapper">
                        <div className="colorInfo">
                            <span className="status-circle blueBackground"></span>
                            <small><strong>Too Low</strong></small>
                            <span className="status-circle redBackground"></span>
                            <small><strong>Too High</strong></small>
                        </div>
                    </div>
                    <div className="row beerlistSection">
                        {
                            beerList && beerList.length ?
                                beerList.map((beer, index) => (
                                    <BeerComponent beerContentDetail={beer} key={beer.id} temperatureType={temperatureType} />
                                )) : null
                        }
                    </div>
                </div>
                <Footer />
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