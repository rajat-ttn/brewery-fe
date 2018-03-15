import React from 'react';
import { shallow } from 'enzyme';
import ContainerComponent from '../index';
import HeaderContainer from '../../Common/Header';
import Footer from '../../Common/Footer';
import DashboardContainer from '../../Dashboard';


describe('ContainerComponent should render correctly', () => {
    let containerComponent = shallow(<ContainerComponent />)

    it("always renders a wrapper div", () => {
        const divs = containerComponent.find("div");
        expect(divs.length).toBeGreaterThan(0);
    });
    it("wrapper div contains everything else that gets rendered", () => {
        const divs = containerComponent.find("div");
        const wrappingDiv = divs.first();
        expect(wrappingDiv.children()).toEqual(containerComponent.children());
    });

    describe("rendered `Header Component`", () => {
        it("always renders a `Header Component`", () => {
            expect(containerComponent.find(HeaderContainer).length).toBe(1);
        });

        it("does not receive any props", () => {
            const header = containerComponent.find(HeaderContainer);
            expect(Object.keys(header.props()).length).toBe(0);
        });
    });

    describe("rendered `Dashboard Component`", () => {
        it("always renders a `Dashboard Component`", () => {
            expect(containerComponent.find(DashboardContainer).length).toBe(1);
        });

        it("does not receive any props", () => {
            const dashboard = containerComponent.find(DashboardContainer);
            expect(Object.keys(dashboard.props()).length).toBe(0);
        });
    });

    describe("rendered `Header Footer Component`", () => {
        it("always renders a `Footer Component`", () => {
            expect(containerComponent.find(Footer).length).toBe(1);
        });

        it("does not receive any props", () => {
            const footer = containerComponent.find(Footer);
            expect(Object.keys(footer.props()).length).toBe(0);
        });
    });

    it('renders correctly', () => {
        expect(containerComponent).toMatchSnapshot();
    });
});

