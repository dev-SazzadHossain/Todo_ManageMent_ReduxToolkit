import { Fragment } from "react";
import TodoForm from "./components/TodoFrom";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

function App() {
  const { todos = [] } = useSelector((state) => state?.todos);
  return (
    <Fragment>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            MANAGE YOUR TODOS WITH REDUX TOOLKIT
          </h1>
          <div className="mb-4">
            {/* Todo form  */}
            <TodoForm />
          </div>
          <div className=" h-[450px] overflow-auto flex flex-col gap-y-3 scroll_width py-5">
            {/*  Add TodoItem Loop here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoList todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
