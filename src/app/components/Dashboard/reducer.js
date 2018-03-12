import ACTION from '../../../constants/actions';
const initialState = [];

const updateBeerData = (state, {beers}) => {
    return [...beers ]
};

const updateCurrentBeerTemperature = (state, payload) => {
    const updatedItems = state.map(item => {
        if(parseInt(item.containerId,0) === parseInt(payload.containerId, 10)){
            const lastUpdatedTime = new Date();
            return { ...item, ...payload, lastUpdatedTime }
        }
        return item
    })

    return updatedItems;
};

export default function beerListReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_BEER_LIST: return updateBeerData(state, action.payload);
        case ACTION.UPDATE_CONTAINER_TEMPERATURE: return updateCurrentBeerTemperature(state, action.payload);
        default: return state;
    }
};
