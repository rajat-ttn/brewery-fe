import React from 'react';
import { PropTypes } from 'prop-types'
import BeerComponent from '../BeerComponent'

const BeerList = ({ beerList, temperatureType }) => {
    return (
        <div className="row beerlistSection">
            {
                beerList && beerList.length ?
                    beerList.map((beer, index) => (
                        <BeerComponent beerContentDetail={beer} key={beer.id} temperatureType={temperatureType} />
                    )) : <div className="msgStyle"><p>No Container Found</p></div>
            }
        </div>
    );
};

BeerList.propTypes = {
    beerList: PropTypes.array.isRequired,
    temperatureType: PropTypes.string.isRequired,
};
export default BeerList;