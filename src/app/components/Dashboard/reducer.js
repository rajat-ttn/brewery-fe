import ACTION from '../../../constants/actions';
const initialState = {
    beerList : [],
};

const updateBeerData = (state, { beers }) => {
    return { ...state, beerList:beers };
};

export default function beerListReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_BEER_LIST: return updateBeerData(state, action.payload);
        default: return state;
    }
};
