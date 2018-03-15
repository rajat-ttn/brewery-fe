import React from 'react';
import { PropTypes } from 'prop-types';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { TEMPERATURE_TYPE } from '../../../../constants/textConstants';

const TemperatureFilter = ({ temperatureType, changeTemperatureType }) => {
    let selectedTempLabel = '';
    TEMPERATURE_TYPE.forEach(({ value,label }) => {
        if (temperatureType === value) {
            selectedTempLabel = label;
        }
    });
    return (
        <div className="dropdownSection">
            <Dropdown
                options={TEMPERATURE_TYPE}
                onChange={changeTemperatureType}
                value={selectedTempLabel}
            />
        </div>

    );
};

TemperatureFilter.propTypes = {
    temperatureType: PropTypes.string.isRequired,
    changeTemperatureType: PropTypes.func.isRequired,
};

export default TemperatureFilter;