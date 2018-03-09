import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './index';


describe('Footer Component Should render correctly', () => {
    it('renders correctly', () => {
        const FooterComponent = renderer.create(
            <Footer />
        );
        expect(FooterComponent.toJSON()).toMatchSnapshot();
    });
});
