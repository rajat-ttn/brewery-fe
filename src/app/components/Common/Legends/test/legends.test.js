import React from 'react';
import { shallow } from 'enzyme';
import Legends from '../index';


describe('Legends Component should render correctly', () => {
    let allProps,
        legendComponent;

    beforeEach(() => {
        allProps = {
            legendsValue: ['Too Low'],
            legendColorClass: ['blueBackground'],
        };
        legendComponent = shallow(<Legends {...allProps}  />);
    });

    describe("render legend element", () => {
        it("always renders span", () => {
            const span = legendComponent.find("span").first();
            expect(span.length).toBe(allProps.legendsValue.length);
        });
    });

    it('renders correctly', () => {
        expect(legendComponent).toMatchSnapshot();
    });
});
