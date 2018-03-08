import React from 'react';
import { PropTypes } from 'prop-types';
import BeerComponent from '../BeerComponent';
import { TEMPERATURE_TYPE } from '../../../constants/textConstants'
import './style.css';

const ContainerComponent = ({ beerList, temperatureType, changeTemperatureType }) => {
    return (
        <div className="row">
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
            {
                beerList && beerList.length ?
                    beerList.map((beer, index) => (
                        <BeerComponent beerContentDetail={beer} key={beer.id} temperatureType={temperatureType} />
                        )) : null
            }
        </div>
    );
}

ContainerComponent.propTypes = {
    beerList: PropTypes.array.isRequired,
    temperatureType: PropTypes.string.isRequired,
    changeTemperatureType: PropTypes.func.isRequired,
};

export default ContainerComponent;