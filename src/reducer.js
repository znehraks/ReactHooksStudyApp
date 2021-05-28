import { v4 as uuidv4 } from "uuid";

export const initialState = {
  toDos: [],
  completed: [],
};
export const ADD = "increment";
export const DELETE = "delete";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";
const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
      };
    case DELETE: {
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    }
    case COMPLETE: {
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, { ...target }],
      };
    }
    case UNCOMPLETE: {
      const target = state.completed.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
        toDos: [...state.toDos, { ...target }],
      };
    }
    default:
      return;
  }
};

export default reducer;
