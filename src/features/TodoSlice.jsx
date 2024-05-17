import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todosRedux")) || [],
};

const updateTodo = (todos) => {
  localStorage.setItem("todosRedux", JSON.stringify(todos));
};
export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    // ** ADD TODO
    addTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        { id: nanoid(), todo: action.payload, isCompleted: false },
      ];
      updateTodo(state?.todos);
    },

    // ** EDIT TODO
    editTodo: (state, action) => {
      state.todos = state?.todos.map((todo) =>
        todo?.id === action?.payload?.id
          ? { ...todo, todo: action.payload.todoMsg }
          : todo
      );
      updateTodo(state?.todos);
    },

    //  **  DELETE TODO
    deleteTodo: (state, action) => {
      state.todos = state?.todos.filter((todo) => todo.id !== action.payload);
      updateTodo(state?.todos);
    },

    //  ** TOGGLE TODO
    toggleTodo: (state, action) => {
      state.todos = state?.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      updateTodo(state?.todos);
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todoSlice.actions;
