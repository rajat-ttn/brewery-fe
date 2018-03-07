import ACTION from '../../../constants/actions';

const beerlist = [{
    name: '123',
    type: '124'
}]

export function beerListReducer(state = beerlist, action) {
    switch (action.type) {
        case ACTION.GET_BEER_LIST :
            return [ ...state, action.payload ];

        default:
            return state;
    }
};
