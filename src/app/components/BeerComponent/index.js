import React from 'react';
import { PropTypes } from 'prop-types';
import { ConvertTempCelciusToFahrenheit } from '../../../util/helper';
import './style.css';

const BeerComponent = ({ beerContentDetail, temperatureType }) => {
    const { beerType, tempRange, currentTemperature } = beerContentDetail;
    const minTemp = ConvertTempCelciusToFahrenheit(temperatureType,tempRange[0]);
    const maxTemp = ConvertTempCelciusToFahrenheit(temperatureType,tempRange[1]);
    const tempSymbol = temperatureType === 'CELSIUS' ? `&#8451;` : `&#8457;`;
    return (
         <div className="col-md-4 commonBoxModel">
              <div className="beerContainer">
                   <h3 className="beertype">{beerType}</h3>
                   {
                     currentTemperature > tempRange[1] ?
                        <span className="currentTemp danger red">
                            <img className="iconStyling" src="../images/temp-icon.png" />
                            {currentTemperature ? ConvertTempCelciusToFahrenheit(temperatureType,currentTemperature) : '--'}&#8451;
                        </span>
                        : currentTemperature < tempRange[0] ?
                            <span className="currentTemp danger blue">
                                <img className="iconStyling" src="../images/temp-icon.png" />
                                {currentTemperature ? ConvertTempCelciusToFahrenheit(temperatureType, currentTemperature) : '--'}&#8451;
                            </span>
                            :
                            <span className="currentTemp">
                                 <img className="iconStyling" src="../images/temp-icon.png" />
                                 {currentTemperature ? ConvertTempCelciusToFahrenheit(temperatureType,currentTemperature) : '--'}&#8451;
                            </span>

                   }

                   <span className="tmpLabel">Current Temp</span>

                   <span className="rangeTemp">
                       <img className="iconStyling" src="../images/temp-icon.png" />
                       {`${tempRange[0]} - ${tempRange[1]}`}&#8451;
                   </span>

                   <span className="tmpLabel">Temp Range</span>
              </div>
          </div>
    );
};
BeerComponent.propTypes = {
    beerContentDetail: PropTypes.object.isRequired,
    temperatureType: PropTypes.string.isRequired,
};

export default BeerComponent;