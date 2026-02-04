import { useRef } from "react";
import { useAddTodoWithDelay } from "../../hooks/useAddTodoWithDelay";
import { useTodoStore } from "../../store/todo-store";

import Button from "../button/button";
import ModalRoot from "../modal/Modal-root";
import TodoAddForm from "./todo-add-form";
import TodoList from "./todo-list";
import TodoListCompleted from "./Todo-list-completed";

const TodoRoot = () => {
  const inputAddTodo = useRef<HTMLInputElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { isOpened } = useTodoStore();

  const { addTodoClick, removeTimeout } = useAddTodoWithDelay({
    inputAddTodo,
    timeoutRef,
  });

  return (
    <div className="min-h-screen bg-linear-to-r from-[rgb(79,154,184)] via-[rgb(87,199,133)] to-[#77d484]">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm bg-white/90 backdrop-blur-xl rounded-[28px] shadow-2xl p-5 mt-8">
          <h1 className="text-center text-xl font-semibold text-gray-900 mb-4">
            Todo list
          </h1>

          <TodoAddForm inputAddTodo={inputAddTodo} addTodoClick={addTodoClick}>
            <Button
              className={
                isOpened
                  ? "text-sm text-white bg-red-500 block mx-auto mb-4 px-4 py-2 cursor-pointer rounded-xl active:scale-95 hover:bg-red-700 transition"
                  : "text-transparent cursor-none pointer-events-none aria-hidden"
              }
              text="Cancel pending tasks"
              onClick={removeTimeout}
            />
          </TodoAddForm>

          <TodoList />
          <TodoListCompleted />
          <ModalRoot />
        </div>
      </div>
    </div>
  );
};

export default TodoRoot;
