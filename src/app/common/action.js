import ACTION from '../../constants/actions';

export const updateBeerTemperature = (data) => {
    return {
        type: ACTION.UPDATE_CONTAINER_TEMPERATURE,
        payload: data,
    }
};