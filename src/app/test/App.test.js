import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';


describe('App renders without crashing', () => {
    const initialState = {output:100};
    const mockStore = configureStore();
    let store = mockStore(initialState);


    // it('renders component correctly', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<App />, div);
    //     ReactDOM.unmountComponentAtNode(div);
    // });

    it('should render children correctly', () => {
        const appComponent = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(appComponent.toJSON()).toMatchSnapshot();
    });
});

global.requestAnimationFrme = function(callback) {
    setTimeout(callback, 0);
};
