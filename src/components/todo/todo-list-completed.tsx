import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "../button/button";
import { useTodoStore } from "../../store/todo-store";

const TodoListCompleted = () => {
  const { todoCompleted, toggleTodo, openModal } = useTodoStore();

  return (
    todoCompleted.length > 0 && (
      <>
        <h2 className="text-xs tracking-wide text-gray-500 mt-6 mb-2">
          Done list.
        </h2>

        <ul className="space-y-2">
          {todoCompleted.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-100 rounded-xl px-3 py-3"
            >
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-5 h-5 accent-green-600 cursor-pointer"
                />

                <span className="text-sm text-gray-500 line-through">
                  {todo.todo}
                </span>
              </label>

              <Button
                className="text-gray-400 hover:text-red-500 cursor-pointer active:scale-95"
                text={<TrashIcon className="h-5 w-5" />}
                onClick={() => openModal(todo.id)}
              />
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default TodoListCompleted;
