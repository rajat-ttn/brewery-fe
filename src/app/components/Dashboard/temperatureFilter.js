import React from 'react';
import { PropTypes } from 'prop-types';

import { TEMPERATURE_TYPE } from '../../../constants/textConstants';

const TemperatureFilter = ({ temperatureType, changeTemperatureType }) => {
    return (
        <select
            className="input-sm form-control input-s-sm inline"
            value={temperatureType}
            onChange={changeTemperatureType}
        >
            {
                TEMPERATURE_TYPE.map(filter => (
                    <option key={filter.value} value={filter.value}>{filter.name}</option>
                ))
            }
        </select>
    );
}

TemperatureFilter.propTypes = {
    temperatureType: PropTypes.string.isRequired,
    changeTemperatureType: PropTypes.func.isRequired,
};

export default TemperatureFilter;