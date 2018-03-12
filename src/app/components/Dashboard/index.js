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
import LoadingIndicator from '../Common/LoadingIndicator';
import subscribeToUpdateTemperature from '../../socket';
import { updateBeerTemperature } from './action';

class Dashboard extends Component {
    constructor(props){
        super(props);
        const { updateTemperature } = props;
        this.audio = new Audio('/sounds/Alarm.mp3');
        this.attachAudioEvents();
        subscribeToUpdateTemperature(data => {
            updateTemperature(data);
        });
        this.state = {
            showLoader: true,
        };
    }

    componentDidMount(){
        const { fetchBeerList } = this.props;
        fetchBeerList().then(response => {
            if (response.status === 200) {
                this.setState({ showLoader: false });
            } else if (response.status !== 200) {
                this.setState({ showLoader: false });
            }
        }).catch(() => this.setState({ showLoader: false }));
    }

    componentWillReceiveProps({ isMute, isAnyBeerOutOfTempRange }) {
        const audio = this.audio;
        if (isMute || !isAnyBeerOutOfTempRange) {
            audio.pause();
        } else if (isAnyBeerOutOfTempRange) {
            audio.play();
        };
    };

    attachAudioEvents = () => {
        this.audio.onended = () => {
            if (this.props.isAnyBeerOutOfTempRange && !this.props.isMute) {
                this.audio.play();
            }
        }
    };

    changeTemperatureType = event => {
        const updatedTempType = event.target.value;
        const { setTemperatureType } = this.props;
        if (updatedTempType) {
            setTemperatureType(updatedTempType)
        }
    };
    
    render() {
        const { beerList, temperatureType, isMute } = this.props;
        const { showLoader } = this.state;
        return (
            <div className="wrapper">
                <LoadingIndicator showLoader={showLoader}/>
                <Header toggleSound={() => { this.props.toggleSound(!isMute); }} isMute={isMute} />
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

export const mapStateToProps = state => {
    let isAnyBeerOutOfTempRange = false;
    state.beerList.forEach(({ currentTemperature, tempRange }) => {
        if (currentTemperature < tempRange[0] || currentTemperature > tempRange[1]) {
            isAnyBeerOutOfTempRange = true;
        }
    });
    return  ({
        beerList: state.beerList,
        temperatureType: state.config.temperatureType,
        isMute: state.config.isMute,
        isAnyBeerOutOfTempRange,
    })
};

export const mapDispatchToProps = dispatch => ({
    fetchBeerList: () => dispatch(fetchBeerList()),
    setTemperatureType: value => dispatch(setTemperatureType(value)),
    toggleSound: isMute => dispatch(toggleSound(isMute)),
    updateTemperature: data => dispatch(updateBeerTemperature(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


export { Dashboard as DashboardContainer };
