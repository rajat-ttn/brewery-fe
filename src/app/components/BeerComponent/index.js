import React from 'react';
import { PropTypes } from 'prop-types';
import { ConvertTempCelciusToFahrenheit } from '../../../util/helper';
import './style.css';
import { CONTAINER_STYLYING } from '../../../constants/textConstants'

const BeerComponent = ({ beerContentDetail }) => {
    const { beerType, tempRange, containerId, currentTemperature} = beerContentDetail;
    return (
         <div className="col-md-4 commonBoxModel">
              <div className="beerContainer">
                  <h2 className={`${CONTAINER_STYLYING[containerId-1]}`}>Container {containerId}</h2>
                  <div className="beerInfo">
                  <strong>Beer Type:</strong> {beerType}
                  <span className="borderBox"><strong>Temp Range:</strong> {`${tempRange[0]} - ${tempRange[1]}`}</span>

                  <span className="borderBox"><strong>Current Temp:</strong> {currentTemperature}</span>
                  {
                    currentTemperature > tempRange[1] ?
                    <span className="status dangerHigh"><span className="status-circle high-temp"></span> Above temperature Range</span>
                    :
                    currentTemperature < tempRange[0] ?
                    <span className="status dangerLow"><span className="status-circle low-temp"></span> Below temperature Range</span>
                    :
                    <span className="status"><span className="status-circle normal-temp"></span>Normal</span>
                  }
                  </div>
              </div>
          </div>
    );
};
BeerComponent.propTypes = {
    beerContentDetail: PropTypes.object.isRequired,
    temperatureType: PropTypes.string.isRequired,
};

export default BeerComponent;