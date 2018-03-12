import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../index';

describe('Header Component Should render correctly', () => {
    it('renders correctly', () => {
        const HeaderComponent = renderer.create(
            <Header />
        );
        expect(HeaderComponent.toJSON()).toMatchSnapshot();
    });
});
