import * as actions from '../action';
import * as types from '../../../../constants/actions';


describe('should fetch beer list correctly',()=> {
    it('get beer list', () => {
        let payload = [{beerType : "Aler Beer", containerId: 1, id: 1, tempRange: [3,5]}, {beerType : "Aler Beer2", containerId: 2, id: 2, tempRange: [2,4]}];
        const expectedAction = {
            type: types.default.GET_BEER_LIST,
            payload
        };
        expect(actions.getBeerList(payload)).toEqual(expectedAction);
    });
});