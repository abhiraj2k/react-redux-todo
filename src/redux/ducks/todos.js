const ADD_TODO = "add_todo";
const REMOVE_TODO_ITEM = "remove_todo_item";
const MODIFY_TODO = "modify_todo";
const MODIFY_TODOLIST = "modify_todolist"

export const add_todo = (todoItem) => ({
    type: ADD_TODO,
    payload: todoItem
})

export const remove_todo_item = (id) => ({
    type: REMOVE_TODO_ITEM,
    payload: id
})

export const modify_todo = (todo) => ({
    type: MODIFY_TODO,
    payload: todo
})

export const modify_todolist = (modifiedTodoList) => ({
    type: MODIFY_TODOLIST,
    payload: modifiedTodoList
})

const initialState = {
    todoList: [],
    currentId: 0
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            state.todoList.push({ id: state.currentId + 1, ...action.payload });
            return { ...state, currentId: state.currentId + 1 };
        case REMOVE_TODO_ITEM:
            return { ...state, todoList: state.todoList.filter((todo) => todo.id !== action.payload) };
        case MODIFY_TODO:
            state.todoList.forEach((todo) => {
                if (todo.id === action.payload.id) todo = action.payload;
            });
            return state;
        case MODIFY_TODOLIST:
            return { ...state, todoList: action.payload }
        default:
            return state;
    }
};
export default todoReducer;
