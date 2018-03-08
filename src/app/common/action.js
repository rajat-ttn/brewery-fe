import ACTION from '../../constants/actions';

export const updateBeerTemperature = (data) => {
    return {
        type: ACTION.UPDATE_BEER_TEMPERATURE,
        payload: data,
    }
};