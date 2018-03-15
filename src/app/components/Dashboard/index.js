import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { fetchBeerList } from './async.action';
import BeerList from '../BeerList';
import Legends from '../Common/Legends';
import LoadingIndicator from '../Common/LoadingIndicator';
import subscribeToUpdateTemperature from '../../socket';
import { updateBeerTemperature } from './action';
import NotificationService from '../../service/notificationService';
import { isSafari } from "../../../util/helper";
import { TEMP_LEGEND } from '../../../constants/textConstants'

class Dashboard extends Component {
    constructor(props){
        super(props);
        const { updateTemperature } = props;
        // safari doesnt play
        if(!isSafari()) {
            this.audio = new Audio('/sounds/Alarm.mp3');
            this.attachAudioEvents();
        }
        subscribeToUpdateTemperature(data => {
            updateTemperature(data);
            this.browserNotification(data);
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
        if(audio) {
            if (isMute || !isAnyBeerOutOfTempRange) {
                audio.pause();
            } else if (isAnyBeerOutOfTempRange) {
                audio.play();
            }
        }
    };

    // this function is to push browser notification if container is out of range
    browserNotification = (data) => {
        const { beerList } = this.props;
        if(beerList.length){
            const beerItem = beerList.find(item => {
                return parseInt(item.containerId, 10) === parseInt(data.containerId, 10);
            });
            if ((data.currentTemperature < beerItem.tempRange[0]) || (data.currentTemperature > beerItem.tempRange[1])) {
                let messageTitle = data.currentTemperature < beerItem.tempRange[0] ? 'Low Temp. Alert !! ' : 'High Temp. Alert !!';
                NotificationService.createNotification({
                    title: messageTitle,
                    body: `Please check ${beerItem.beerType} container`
                });
            }
        }
    };

    // function to start alarm if any container temperature gets out of temp range
    attachAudioEvents = () => {
        this.audio.onended = () => {
            if (this.props.isAnyBeerOutOfTempRange && !this.props.isMute) {
                this.audio.play();
            }
        }
    };

    
    render() {
        const { beerList, temperatureType } = this.props;
        const { showLoader } = this.state;
        return (
            <div className="pageLayout">
                <LoadingIndicator showLoader={showLoader}/>
                <Legends legendsValue={TEMP_LEGEND} legendColorClass={['blueBackground','redBackground']}/>
                <BeerList beerList={beerList} temperatureType={temperatureType} />
            </div>
        );
    }
}

Dashboard.defaultProps = {
    beerList: [],
};

Dashboard.propTypes = {
    fetchBeerList: PropTypes.func.isRequired,
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
    updateTemperature: data => dispatch(updateBeerTemperature(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


export { Dashboard as DashboardContainer };
