import React from 'react';
import { PropTypes } from 'prop-types';
import { ConvertTempCelciusToFahrenheit } from '../../../util/helper';
import './style.css';

const BeerComponent = ({ beerContentDetail, temperatureType }) => {
    const { beerType, tempRange, currentTemperature } = beerContentDetail;
    const minTemp = ConvertTempCelciusToFahrenheit(temperatureType,tempRange[0]);
    const maxTemp = ConvertTempCelciusToFahrenheit(temperatureType,tempRange[1]);
    const tempSymbol = temperatureType === 'CELSIUS' ? <span>&#8451;</span> : <span>&#8457;</span>
    return (
         <div className="col-md-4 commonBoxModel">
              <div className="beerContainer">
                <div className="overlay">
                    <h3 className="beertype">{beerType}</h3>
                                       {
                                         currentTemperature > tempRange[1] ?
                                            <span className="currentTemp danger red">
                                                <img className="iconStyling" src="../images/temp-icon.png" />
                                                {currentTemperature ? ConvertTempCelciusToFahrenheit(temperatureType,currentTemperature) : '--'}
                                                {currentTemperature ? tempSymbol : ''}
                                            </span>
                                            : currentTemperature < tempRange[0] ?
                                                <span className="currentTemp danger blue">
                                                    <img className="iconStyling" src="../images/temp-icon.png" />
                                                    {currentTemperature ? ConvertTempCelciusToFahrenheit(temperatureType, currentTemperature) : '--'}
                                                    {currentTemperature ? tempSymbol : ''}
                                                </span>
                                                :
                                                <span className="currentTemp">
                                                     <img className="iconStyling" src="../images/temp-icon.png" />
                                                     {currentTemperature ? ConvertTempCelciusToFahrenheit(temperatureType,currentTemperature) : '--'}
                                                    {currentTemperature ? tempSymbol : ''}
                                                </span>

                                       }

                                       <span className="tmpLabel">Current Temp</span>

                                       <span className="rangeTemp">
                                           <img className="iconStyling" src="../images/temp-icon.png" />
                                           {`${minTemp} - ${maxTemp}`}{tempSymbol}
                                       </span>

                                       <span className="tmpLabel">Temp Range</span>
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