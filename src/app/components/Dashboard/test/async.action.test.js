import {fetchBeerList} from '../async.action';
import axios from 'axios';
import { getBeerList } from '../action'
import { setErrorMessage } from '../../Common/ErrorHandling/action'

describe('testing beerList reducer',()=> {

    let actualImplementation;
    let mockedResponse = {
        status:200,
        data:{
            name:'rajat'
        }
    };
    beforeAll(()=>{
        actualImplementation = axios.get;
        axios.get  = function(){
            return Promise.resolve(mockedResponse);
        }
    });

    afterAll(()=>{
        axios.get = actualImplementation;
    });

    it('should trigger GET_BEER_LIST action with appropriate data if API call is successful', () => {
        const dispatch = jest.fn();
        return fetchBeerList()(dispatch).then(()=>{
            expect(dispatch).toBeCalledWith(getBeerList(mockedResponse.data));
        });
    });

    it('should trigger SET_ERROR action with appropriate error if API call is not successful', () => {
        mockedResponse.status = 404;
        mockedResponse.data = {
            errorMsg:'some_error'
        };
        const dispatch = jest.fn();
        return fetchBeerList()(dispatch).then(()=>{
            expect(dispatch).toBeCalledWith(setErrorMessage(mockedResponse.data));
        });
    });

});
