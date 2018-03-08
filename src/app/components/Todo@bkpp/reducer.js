import ACTION from '../../../constants/actions';

export function todoListReducer(state = [], action) {
    switch (action.type) {
        case ACTION.ADD_ITEM :
            action.payload.id = state.length + 1;
            return [ ...state, action.payload ];

        case ACTION.DELETE_ITEM :
            state.splice(action.payload.id-1, 1);
             return [...state];

        case ACTION.UPDATE_ITEM :
            state[action.payload.id-1] = action.payload;
            return [...state];

        default:
            return state;
    }
};


export function filterReducer(state = 'ALL', action) {
    switch(action.type){
        case ACTION.APPLY_FILTER:
            return action.payload
    }
    return state;
};
