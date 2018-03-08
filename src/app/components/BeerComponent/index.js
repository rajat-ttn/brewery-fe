import React from 'react';
import './style.css';

const BeerComponent = ({ beerContentDetail }) => {
    const { beerType, tempRange, containerId} = beerContentDetail;
    return (
         <div className="col-md-4 commonBoxModel">
              <div className="beerContainer">
                  <h2>Container {containerId}</h2>
                  <div className="beerInfo">
                  <strong>Beer Type:</strong> {beerType}
                  <span className="borderBox"><strong>Temp Range:</strong> {`${tempRange[0]} - ${tempRange[1]}`}</span>
                  <span className="borderBox"><strong>Current Temp:</strong> 4.5</span>
                  <span className="status danger"><span className="status-circle high-temp"></span> Above temperature Range</span>
                  </div>
              </div>
          </div>
    );
}

export default BeerComponent;