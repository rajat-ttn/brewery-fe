import ACTION from '../../../constants/actions';

export const addTodo = (todoItem) => {
    return {
        type: ACTION.ADD_ITEM,
        payload: todoItem
    }
};

export const deleteTodo = (todoItem) => {
    return {
        type: ACTION.DELETE_ITEM,
        payload: todoItem
    }
};

export const updateTodo = (todoItem) => {
    return {
        type: ACTION.UPDATE_ITEM,
        payload: todoItem
    }
};
export const applyFilter = (filterType) => {
    return {
        type: ACTION.APPLY_FILTER,
        payload: filterType
    }
};