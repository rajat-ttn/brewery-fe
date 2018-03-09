import React from 'react';
import { shallow } from 'enzyme';
import BeerComponent from './index';


describe('BeerComponent component renders the BeerComponent correctly', () => {
    let beerComp,
        allProps;

    beforeEach(()=> {
        allProps = {
            beerContentDetail: { beerType : "Aler Beer", containerId: 1, id: 1, tempRange: [3,5] },
            temperatureType: "FAHRENHEIT"
        };
        beerComp = shallow(<BeerComponent {...allProps} />);
    });

    it('render the BeerComponent component', () => {
        expect(beerComp.length).toEqual(1)
    });

    it('renders correctly with beer detail and temperature', () => {
        expect(beerComp).toMatchSnapshot();
    });

    it('renders with different temperature', () => {
        allProps.temperatureType = "CELSIUS";
        expect(beerComp).toMatchSnapshot();
    });

    it('renders with no data', () => {
        allProps.beerContentDetail = {};
        expect(beerComp).toMatchSnapshot();
    });
});
