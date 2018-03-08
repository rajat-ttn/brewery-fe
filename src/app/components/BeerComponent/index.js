import React from 'react';
import './style.css';

const BeerComponent = ({ beerContentDetail }) => {
    const { beerType, tempRange} = beerContentDetail;
    return (
        <div className="col-md-4 commonBoxModel">
            <div className="beerContainer">
                <figure>
                    <img src="../images/beer.png" alt="Beer 1" className="beerContainerImage"/>
                    <figcaption className="yellowContainer">
                        {beerType}<br/>
                        Current Temp<br/>
                        Temp Range
                    </figcaption>
                </figure>

            </div>
        </div>
    );
}

export default BeerComponent;