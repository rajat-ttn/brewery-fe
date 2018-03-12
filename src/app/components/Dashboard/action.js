import ACTION from '../../../constants/actions';

export const getBeerList = (beerList) => {
    return {
        type: ACTION.GET_BEER_LIST,
        payload: beerList,
    }
};

export const updateBeerTemperature = (data) => {
    return {
        type: ACTION.UPDATE_CONTAINER_TEMPERATURE,
        payload: data,
    }
};
