import React from 'react';
import { PropTypes } from 'prop-types';
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

ContainerComponent.propTypes = {
    beerList: PropTypes.array.isRequired,
};

export default ContainerComponent;