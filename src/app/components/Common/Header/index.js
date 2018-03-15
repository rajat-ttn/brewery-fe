import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setTemperatureType, toggleSound } from '../../Common/RunTimeConfig/action';
import { isSafari } from "../../../../util/helper";
import TemperatureFilter from './temperatureFilter';

// Header Component
const Header = ({ isMute, temperatureType, setTemperatureType, toggleSound }) => {

    // function to update temperature type in redux state
    const changeTemperature = selectedData => {
        const { value } = selectedData;
        if (value) {
            setTemperatureType(value)
        }
    };
    const imageName = isMute ? 'alarm_white.png' : 'alarm.png';
    return (
        <header>
            <img src="/images/beer_logo.png" alt="logo" className="logoStyle"/>
            <h1>The Brewery</h1>
            {
                !isSafari()?(<span onClick={() => { toggleSound(!isMute); }}>
                    <img src={`/images/${imageName}`} alt="alarm" className="bellIcon"/>
                </span>):null
            }
            <TemperatureFilter temperatureType={temperatureType} changeTemperatureType={changeTemperature} />
        </header>
    );
};

Header.propTypes = {
    toggleSound: PropTypes.func,
    isMute: PropTypes.bool,
    temperatureType: PropTypes.string.isRequired,
    setTemperatureType: PropTypes.func.isRequired,
};

export const mapStateToProps = state => {
    return  ({
        temperatureType: state.config.temperatureType,
        isMute: state.config.isMute,
    })
};

export const mapDispatchToProps = dispatch => ({
    setTemperatureType: value => dispatch(setTemperatureType(value)),
    toggleSound: isMute => dispatch(toggleSound(isMute)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);