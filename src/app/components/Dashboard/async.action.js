import API from '../../../config/endpoints';
import TextConstant from '../../../constants/textConstants';
import { getBeerList } from './action'
import { setErrorMessage, removeErrorMessage } from '../Common/ErrorHandling/action'

export const fetchBeerList = () => async (dispatch) => {
    const { DOMAIN, BASE, VERSION, DASHBOARD } = API.ENDPOINT;
    let {url, method } = DASHBOARD.getBeer;
    let beerListUrl = `${DOMAIN}://${BASE}${VERSION}${url}/123`;
    const response = await fetch(beerListUrl, {
        method,
        headers: { 'Content-Type': 'application/json' },
    });
    const { status } = response;
    const data = await response.json();
    if( status === 200){
        dispatch(getBeerList(data));
    } else {
        dispatch(setErrorMessage(data));
        setTimeout(() => dispatch(removeErrorMessage()), 4000);
    }
};
