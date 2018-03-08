import ACTION from '../../../constants/actions';
const initialState = {
    beerList : {
        "beers": [
            {
                "id": 1,
                "containerId": 1,
                "beerType": "Aler Beer",
                "tempRange": [
                    3,
                    5
                ]
            },
            {
                "id": 2,
                "containerId": 2,
                "beerType": "Draught Beer",
                "tempRange": [
                    3,
                    5
                ]
            },
            {
                "id": 3,
                "containerId": 3,
                "beerType": "Lager Beer",
                "tempRange": [
                    3,
                    5
                ]
            },
            {
                "id": 4,
                "containerId": 4,
                "beerType": "Stout Beer",
                "tempRange": [
                    3,
                    5
                ]
            },
            {
                "id": 5,
                "containerId": 5,
                "beerType": "Wheat Beer",
                "tempRange": [
                    3,
                    5
                ]
            },
            {
                "id": 6,
                "containerId": 6,
                "beerType": "Porter Beer",
                "tempRange": [
                    3,
                    5
                ]
            }
        ]
    },
};

const updateBeerData = (state, payload) => {
    return { ...state, beerList:payload };
};

const updateCurrentBeerTemperature = (state, payload) => {
    const updatedItems = state.map(item => {
        if(item.id === payload.id){
            return { ...item, ...payload }
        }
        return item
    });

    return updatedItems;
};

export default function beerListReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_BEER_LIST: return updateBeerData(state, action.payload);
        case ACTION.UPDATE_BEER_TEMPERATURE: return updateCurrentBeerTemperature(state, action.payload);
        default: return state;
    }
};
