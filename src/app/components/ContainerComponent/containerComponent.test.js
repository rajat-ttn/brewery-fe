import React from 'react';
// import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
// import BeerComponent from './index';
import ContainerComponent from './index';


describe('BeerComponent component renders the BeerComponent correctly', () => {

    it('renders correctly with no data', () => {
        const key = '1';
        const beerList = [];
        const rendered = renderer.create(
            <ContainerComponent beerList={beerList}/>
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });

    it('renders correctly with data', () => {
        const key = '2';
        const beerList = [{ beerType: "Aler Beer", containerId: 1, id: 1, tempRange: [3, 5]}, { beerType: "Aler Beer2", containerId: 2, id: 2, tempRange: [3, 5]},{ beerType: "Aler Beer", containerId: 3, id: 3, tempRange: [3, 5]}];
        const rendered = renderer.create(
            <ContainerComponent beerList={beerList}/>
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
