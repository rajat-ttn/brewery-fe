import React from 'react';
import { shallow } from 'enzyme';

import LoadingIndicator from '../index';

describe('LoadingIndicator Component Should render correctly', () => {
    let showLoader = true;
    let LoadingComponent = shallow(<LoadingIndicator />)

    it('should convert celsius to fahrenheit', () => {
        expect(LoadingComponent.LoadingIndicator(showLoader)).toBeDefined();
    });
});
