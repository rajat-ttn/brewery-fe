import API from '../../../config/endpoints';
import TextConstant from '../../../constants/textConstants';
import { getBeerList } from './action'

export const fetchBeerList = () => async (dispatch) => {
    const { DOMAIN, BASE, VERSION, DASHBOARD } = API.ENDPOINT;
    let {url, method } = DASHBOARD.getBeer;
    let beerListUrl = `${DOMAIN}://${BASE}${VERSION}${url}`;
    console.log("beerListUrl ---->",beerListUrl)
    const response = await fetch(beerListUrl, {
        method,
        headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();
    console.log("response---------->",response)
    console.log("json---------->",json);
    if(Object.keys(json).length){

        dispatch(getBeerList(json));
    }
    /*const { status, message } = json;
    if(status === 200) {
        //dispatch(finishedAddToFavLoading(json.data));
    }*/
};
