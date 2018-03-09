import React from 'react';
import renderer from 'react-test-renderer';
import BeerComponent from './index';


describe('BeerComponent component renders the BeerComponent correctly', () => {
    it('renders correctly with beer detail and temperature', () => {
        const beerContentDetail = {beerType : "Aler Beer", containerId: 1, id: 1, tempRange: [3,5]};
        const temperatureType = "FAHRENHEIT";
        const beerComp = renderer.create(
            <BeerComponent beerContentDetail={beerContentDetail} temperatureType={"FAHRENHEIT"}  />
        );
        expect(beerComp.toJSON()).toMatchSnapshot();
    });
});
