import ACTION from '../../../constants/actions';

export const getBeerList = (beerList) => {
    return {
        type: ACTION.GET_BEER_LIST,
        payload: beerList,
    }
};
