import React, { useState } from "react";
import { addTodo } from "../features/TodoSlice";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  //   **** ADD TODO FUNCTION
  const add = (e) => {
    e.preventDefault();
    if (todo.length > 0) {
      dispatch(addTodo(todo));
    }
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20  py-2.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white "
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
