import ACTION from '../../../constants/actions';

// Action Creater to Update list of containers
export const getBeerList = (beerList) => {
    return {
        type: ACTION.GET_BEER_LIST,
        payload: beerList,
    }
};

// Action Creater to Update Current Temperature of container
export const updateBeerTemperature = (data) => {
    return {
        type: ACTION.UPDATE_CONTAINER_TEMPERATURE,
        payload: data,
    }
};
