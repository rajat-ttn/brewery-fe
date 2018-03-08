import ACTION from '../../../../constants/actions';
const initialState = {
    temperatureType : 'CELSIUS',
};

const setTemperatureType = (state, payload) => {
    return { ...state, temperatureType:payload };
};

export default function temperatureTypeReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.SET_TEMPERATURE_TYPE: return setTemperatureType(state, action.payload);
        default: return state;
    }
};
