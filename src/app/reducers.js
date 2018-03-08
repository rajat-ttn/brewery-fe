import beerListReducer from './components/Dashboard/reducer';
import errorHandlingReducer from './components/Common/ErrorHandling/reducer';

export default {
    beerList: beerListReducer,
    error: errorHandlingReducer,
};