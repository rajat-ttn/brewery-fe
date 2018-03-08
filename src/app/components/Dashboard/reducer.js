import ACTION from '../../../constants/actions';
const initialState = [];

const updateBeerData = (state, {beers}) => {
    console.log("update payload ----->",beers)
    //console.log("update payload ----->",payload)
    return [...beers ]
};

const updateCurrentBeerTemperature = (state, payload) => {
    const updatedItems = state.map(item => {
        if(item.containerId === parseInt(payload.containerId, 10)){
            return { ...item, ...payload }
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
