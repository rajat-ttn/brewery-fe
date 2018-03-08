import ACTION from '../../../constants/actions';
const initialState = {
    beers : []
};

const updateBeerData = (state, {beers}) => {
    console.log("update payload ----->",beers)
    //console.log("update payload ----->",payload)
    //return { ...state, beers:beers };
};

const updateCurrentBeerTemperature = (state, payload) => {
    console.log("statec-------------->",state)
    console.log("payload-------------->",payload)
    const { beers } = state;
    const updatedItems = beers && beers.length && beers.map(item => {
        if(item.containerId === parseInt(payload.containerId, 10)){
            return { ...item, ...payload }
        }
        return item
    })
    console.log("new state ----->",updatedItems)

    return updatedItems;
};

export default function beerListReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_BEER_LIST: return updateBeerData(state, action.payload);
        case ACTION.UPDATE_CONTAINER_TEMPERATURE: return updateCurrentBeerTemperature(state, action.payload);
        default: return state;
    }
};
