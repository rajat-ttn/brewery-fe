import React from 'react';
import { PropTypes } from 'prop-types';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { TEMPERATURE_TYPE } from '../../../constants/textConstants';

const TemperatureFilter = ({ temperatureType, changeTemperatureType }) => {
    let selectedTempLabel = '';
    TEMPERATURE_TYPE.filter(({ value,label }) => {
        if (temperatureType === value) {
            selectedTempLabel = label;
        }
        return selectedTempLabel;
    });

    return (
        <Dropdown
            options={TEMPERATURE_TYPE}
            onChange={changeTemperatureType}
            value={selectedTempLabel}
        />
    );
}

TemperatureFilter.propTypes = {
    temperatureType: PropTypes.string.isRequired,
    changeTemperatureType: PropTypes.func.isRequired,
};

export default TemperatureFilter;