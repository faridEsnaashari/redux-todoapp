import { ADD_ITEM, REMOVE_ITEM } from "./actions";
const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,

        todos: [
          ...state.todos,
          {
            id: Math.floor(Math.random() * 1000),
            text: action.payload,
          },
        ],
      };
    case REMOVE_ITEM:
       state.todos.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
export default reducer;
