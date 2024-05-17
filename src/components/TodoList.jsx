import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../features/TodoSlice";

const TodoList = ({ todo = {} }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo || "");
  const dispatch = useDispatch();
  //   *** DELETE TODO
  const todoDelete = (id) => {
    if (id) {
      dispatch(deleteTodo(id));
    }
  };

  //   EDIT TODO
  const todoEdit = (id) => {
    if (id && todoMsg) {
      dispatch(editTodo({ id, todoMsg }));
    }
    setIsTodoEditable(false);
  };

  //   *** TOGGLE TODO
  const todoToggle = (id) => {
    if (id) {
      dispatch(toggleTodo(id));
    }
  };
  return (
    <div
      className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black  ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      } `}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo?.isCompleted}
        onChange={() => todoToggle(todo?.id)}
      />

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg p-2     ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.isCompleted ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        disabled={todo.isCompleted}
        onClick={() => {
          if (todo?.isCompleted) return;
          if (isTodoEditable) {
            todoEdit(todo?.id);
          } else {
            setIsTodoEditable((prv) => !prv);
          }
        }}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => todoDelete(todo?.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoList;
