import ACTION from '../../../../constants/actions';
import beerListReducer from '../reducer';

describe('testing beerList reducer',() => {

    let initialState = [];

    let action = {
        type: null,
        payload:null
    };

    beforeEach(() => {
        initialState = [];
    });

    it('GET_BEER_LIST action should update state to contain beerList', () => {
        action.type = ACTION.GET_BEER_LIST;
        action.payload = {
            beers:[
                {
                    "id": 1,
                    "containerId": 1,
                    "beerType": "Aler Beer",
                    "tempRange": [
                        4,
                        6
                    ]
                },
                {
                    "id": 2,
                    "containerId": 2,
                    "beerType": "Draught Beer",
                    "tempRange": [
                        5,
                        6
                    ]
                }
            ]
        }
        ;
        let changedState = beerListReducer(initialState, action);
        expect(changedState).toEqual(action.payload.beers);
    });

    it('UPDATE_CONTAINER_TEMPERATURE action should update temperature in reducer state', () => {
        action.type = ACTION.UPDATE_CONTAINER_TEMPERATURE;
        action.payload = {
            containerId:1,
            currentTemperature:3
        };
        initialState =[{
            "id": 1,
            "containerId": 1,
            "beerType": "Ale Beer",
            "tempRange": [
                4,
                6
            ]
        },
        {
            "id": 1,
            "containerId": 2,
            "beerType": "Draught Beer",
            "tempRange": [
                4,
                6
            ]
        }
        ];
        let changedState = beerListReducer(initialState, action);
        let updateBeerItemState = changedState.find((beer) => beer.containerId === action.payload.containerId );

        expect(updateBeerItemState.currentTemperature).toEqual(action.payload.currentTemperature);
    });

    it('null action should return state without changing it', () => {
        action.type = null;
        action.payload = null;
        let changedState = beerListReducer(initialState, action);
        expect(changedState).toEqual(initialState);
    });

});
