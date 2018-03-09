import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import '../../../css/bootstrap.css';
import { fetchBeerList } from './async.action';
import { setTemperatureType, toggleSound } from '../Common/RunTimeConfig/action';
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import BeerComponent from '../BeerComponent';
import TemperatureFilter from './temperatureFilter';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            audio: new Audio('http://www.galls.com/wav/SVPPhaser.wav'),
        }
    }

    componentDidMount(){
        const { fetchBeerList } = this.props;
        fetchBeerList();
    }

    componentWillReceiveProps({ beerList, isMute }) {
        const { audio } = this.state;
        if (isMute) {
            audio.pause();
            return;
        } else {
            beerList.filter(({ currentTemperature, tempRange }) => {
                if (currentTemperature < tempRange[0] || currentTemperature > tempRange[1]) {
                    audio.play();
                }
            });
        };
    };

    changeTemperatureType = event => {
        const updatedTempType = event.target.value;
        const { setTemperatureType } = this.props;
        if(updatedTempType){
            setTemperatureType(updatedTempType)
        }
    };
    
    render() {
        const { beerList, temperatureType, isMute } = this.props;
        return (
            <div>
                <Header toggleSound={() => { this.props.toggleSound(!isMute); }} />
                <div className="pageLayout">
                    <div className="dropdownSection">
                        <TemperatureFilter temperatureType={temperatureType} changeTemperatureType={this.changeTemperatureType}/>
                    </div>
                    <div className="colorInfoWrapper">
                        <div className="colorInfo">
                            <span className="status-circle blueBackground" />
                            <small><strong>Too Low</strong></small>
                            <span className="status-circle redBackground" />
                            <small><strong>Too High</strong></small>
                        </div>
                    </div>
                    <div className="row beerlistSection">
                        {
                            beerList && beerList.length ?
                                beerList.map((beer, index) => (
                                    <BeerComponent beerContentDetail={beer} key={beer.id} temperatureType={temperatureType} />
                                )) : <div className="msgStyle"><p>No Container Found</p></div>
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
    config: PropTypes.object,
};

const mapStateToProps = (state) => ({
    beerList: state.beerList,
    temperatureType: state.config.temperatureType,
    isMute: state.config.isMute,
});

const mapDispatchToProps = dispatch => ({
    fetchBeerList: () => dispatch(fetchBeerList()),
    setTemperatureType: value => dispatch(setTemperatureType(value)),
    toggleSound: isMute => dispatch(toggleSound(isMute)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);