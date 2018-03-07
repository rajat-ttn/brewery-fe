import ACTION from '../../../constants/actions';

const beerlist = [
    {
        beerType: 'Beer 1',
        beerImageUrl: '../../../assets/images/beer.jpg',
        currentTemp: '4',
        tempRange:'4-6',
    },
    {
        beerType: 'Beer 2',
        beerImageUrl: '124',
        currentTemp: '6',
        tempRange:'5-6',
    },
    {
        beerType: 'Beer 3',
        beerImageUrl: '124',
        currentTemp: '4.5',
        tempRange:'4-7',
    },
    {
        beerType: 'Beer 4',
        beerImageUrl: '124',
        currentTemp: '5.5',
        tempRange:'6-8',
    },
    {
        beerType: 'Beer 5',
        beerImageUrl: '124',
        currentTemp: '6',
        tempRange:'3-5',
    },
    {
        beerType: 'Beer 6',
        beerImageUrl: '124',
        currentTemp: '7.5',
        tempRange:'6-7',
    }]

export function beerListReducer(state = beerlist, action) {
    switch (action.type) {
        case ACTION.GET_BEER_LIST :
            return [ ...state, action.payload ];

        default:
            return state;
    }
};
