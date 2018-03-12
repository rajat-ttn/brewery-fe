import React from 'react';
import { PropTypes } from 'prop-types';
import { convertTempCelciusToFahrenheit } from '../../../util/helper';
import TimeAgo from '../Common/TimeAgo';

const BeerComponent = ({ beerContentDetail, temperatureType }) => {
    const { beerType, tempRange, currentTemperature } = beerContentDetail;
    const minTemp = convertTempCelciusToFahrenheit(temperatureType,tempRange[0]);
    const maxTemp = convertTempCelciusToFahrenheit(temperatureType,tempRange[1]);
    const parsedCurrTemp = parseFloat(currentTemperature);
    const tempSymbol = temperatureType === 'CELSIUS' ? <span>&#8451;</span> : <span>&#8457;</span>;
    const alertCss = parsedCurrTemp > maxTemp ? 'danger red ' : currentTemperature < minTemp ? 'danger blue' : '';
    const showCurrentTemp = parsedCurrTemp ? convertTempCelciusToFahrenheit(temperatureType,parsedCurrTemp) : '--';
    const showSymbol = parsedCurrTemp ? tempSymbol : '';
    return (
         <div className="col-sm-6  col-md-6 col-lg-4 commonBoxModel">
              <div className="beerContainer">
                <div className="overlay">
                    <h3 className="beertype">{beerType}</h3>
                        <span className={`currentTemp ${alertCss}`}>
                                <img className="iconStyling" src="/images/temp-icon.png" alt="temperature" />
                            {showCurrentTemp }{showSymbol}
                        </span>
                       <span className="tmpLabel">Current Temp</span>

                       <span className="rangeTemp">
                           <img className="iconStyling" src="/images/temp-icon.png" alt="temperature" />
                           {`${minTemp} - ${maxTemp}`}{tempSymbol}
                       </span>

                       <span className="tmpLabel">Temp Range</span>
                        {
                            parsedCurrTemp ?
                                <TimeAgo beerContentDetail={beerContentDetail} /> :
                                null
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