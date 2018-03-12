import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from '../index';

describe('LoadingIndicator Component Should render correctly', () => {
    let LoadingComponent = shallow(<LoadingIndicator />)
    it('should hide loader', () => {
        const instance = LoadingComponent.instance();
        expect(instance).toBe(null);
    });
});
