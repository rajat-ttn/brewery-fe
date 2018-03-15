import React from 'react';
import { shallow } from 'enzyme';
import BeerList from '../index';
import BeerComponent from '../../BeerComponent/index';


describe('BeerList Component should render correctly', () => {
    let allProps,
        beerListContainer;

    beforeEach(() => {
        allProps = {
            beerList: [{beerType : "Aler Beer", containerId: 1, id: 1, tempRange: [3,5]}],
            temperatureType: "FAHRENHEIT",
        };
        beerListContainer = shallow(<BeerList {...allProps}  />);
    });

    describe("render `BeerComponent` when beerlist is defined", () => {
        it("always renders a `BeerComponent`", () => {
            expect(beerListContainer.find(BeerComponent).length).toBe(1);
        });

        it("BeerComponent must need to pass 2 props ", () => {
            const beerComponent = beerListContainer.find(BeerComponent);
            expect(Object.keys(beerComponent.props()).length).toBe(2);
        });
    });

    describe("render `BeerComponent` when beerlist is empty", () => {
        it("show no container data ", () => {
            const divs = beerListContainer.find("div").first();
            const para = divs.children();
            expect(para.length).toBe(1);
        });
    });


    it('renders correctly', () => {
        expect(beerListContainer).toMatchSnapshot();
    });
});
