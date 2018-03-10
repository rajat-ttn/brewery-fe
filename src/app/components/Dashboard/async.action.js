import API from '../../../config/endpoints';
import { getBeerList } from './action'
import { setErrorMessage, removeErrorMessage } from '../Common/ErrorHandling/action'
import axios from 'axios';

export const fetchBeerList = () => async (dispatch) => {
    try {
        const {DOMAIN, BASE, VERSION, DASHBOARD} = API.ENDPOINT;
        let {url, method} = DASHBOARD.getBeer;
        let beerListUrl = `${DOMAIN}://${BASE}${VERSION}${url}`;
        const response = await axios[method](beerListUrl, {
            headers: {'Content-Type': 'application/json'},
        });
        const {status} = response;
        const data = response.data;
        if (status === 200) {
            dispatch(getBeerList(data));
        } else {
            dispatch(setErrorMessage(data));
            setTimeout(() => dispatch(removeErrorMessage()), 4000);
        }
    }
    catch(err){
        console.log('error occurred while fetching beers!' + err);
    }
};
