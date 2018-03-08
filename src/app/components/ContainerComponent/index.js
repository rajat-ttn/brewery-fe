import React from 'react';
import BeerComponent from '../BeerComponent'
import './style.css';


const ContainerComponent = ({ beerList }) => {
    return (
        <div className="row">
            {
                beerList && beerList.length ?
                    beerList.map((beer, index) => (
                        <BeerComponent beerContentDetail={beer} key={beer.id}/>
                        )) : null
            }
        </div>
    );
}
export default ContainerComponent;