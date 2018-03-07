import * as todo from './components/Todo/reducer'
import * as beer from './components/Dashboard/reducer'

export default {
    todoList : todo.todoListReducer,
    filter: todo.filterReducer,
    beerList: beer.beerListReducer,
};