import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Header from '../index';

describe('Header Component Should render correctly', () => {
    let allProps, header;

    beforeEach(()=> {
        allProps = {
            toggleSound: () => {},
            isMute: false,
        };
        header = shallow(<Header {...allProps} />);
    });

    it('render the Header component', () => {
        expect(header.length).toEqual(1)
    });
    
    it('renders correctly', () => {
        const HeaderComponent = renderer.create(
            <Header {...allProps} />
        );
        expect(HeaderComponent.toJSON()).toMatchSnapshot();
    });
});
