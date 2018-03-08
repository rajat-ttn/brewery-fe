import React from 'react';
import './style.css';

const BeerComponent = ({ beerContentDetail }) => {
    const { beerType, tempRange} = beerContentDetail;
    return (
         <div className="col-md-4 commonBoxModel">
              <div className="beerContainer">
                   <h3 className="beertype">{beerType}</h3>
                   <span className="currentTemp"><img className="iconStyling" src="../images/temp-icon.png" /> 4.5</span>
                   <span className="tmpLabel">Current Temp</span>
                   <span className="rangeTemp"><img className="iconStyling" src="../images/temp-icon.png" /> {`${tempRange[0]} - ${tempRange[1]}`}</span>
                   <span className="tmpLabel">Temp Range</span>
              </div>
          </div>
    );
}

export default BeerComponent;