import Button from "../Button/Button";
import { useRef } from "react";
import { useTodoStore } from "../../store/TodoStore";
import { useAddTodoWithDelay } from "../../hooks/useAddTodoWithDelay";

const AddTodoForm = () => {
  const inputAddTodo = useRef<HTMLInputElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { isOpened } = useTodoStore();

  const { addTodoClick, removeTimeout } = useAddTodoWithDelay({
    inputAddTodo,
    timeoutRef,
  });
  return (
    <>
      <form onSubmit={addTodoClick} className="flex gap-2 mb-4">
        <input
          ref={inputAddTodo}
          type="text"
          placeholder="Add a new task…"
          className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button
          className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium active:scale-95 hover:bg-blue-700 transition cursor-pointer"
          text="Add"
          type="submit"
        />
      </form>

      <Button
        className={
          isOpened
            ? "w-full text-sm text-red-500 mb-4 cursor-pointer"
            : "mb-4 text-transparent pointer-events-none aria-hidden"
        }
        text="Cancel pending tasks"
        onClick={removeTimeout}
      />
    </>
  );
};

export default AddTodoForm;
