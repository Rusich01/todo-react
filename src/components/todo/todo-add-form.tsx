import type { ReactNode, RefObject } from "react";
import Button from "../button/button";
interface Props {
  children: ReactNode;
  addTodoClick: (e: React.FormEvent<HTMLFormElement>) => void;
  inputAddTodo: RefObject<HTMLInputElement | null>;
}

const TodoAddForm = ({ addTodoClick, inputAddTodo, children }: Props) => {
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
      {children}
    </>
  );
};

export default TodoAddForm;
