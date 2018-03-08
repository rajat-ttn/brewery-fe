import beerListReducer from './components/Dashboard/reducer';
import errorHandlingReducer from './components/Common/ErrorHandling/reducer';
import temperatureTypeReducer from './components/Common/RunTimeConfig/reducer';

export default {
    beerList: beerListReducer,
    error: errorHandlingReducer,
    temperatureType: temperatureTypeReducer,
};