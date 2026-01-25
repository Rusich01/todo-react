import Button from "../Button/Button";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useTodoStore } from "../../store/TodoStore";

const TodoList = () => {
  const { listTodos, toggleTodo, doneTodo, openModal } = useTodoStore();

  return (
    <>
      <h2 className="text-xs tracking-wide text-gray-500 mb-2">
        {listTodos.length > 0 ? "Todo list." : "No todos yet."}
      </h2>

      <ul className="space-y-2">
        {listTodos.length > 0 &&
          listTodos.map((listTodo) => (
            <li
              key={listTodo.id}
              className="flex items-center justify-between bg-white rounded-xl px-3 py-3 shadow-md"
            >
              <div className="flex items-center gap-3">
                <input
                  checked={listTodo.completed}
                  onChange={() => {
                    toggleTodo(listTodo.id);
                    doneTodo(listTodo.id);
                  }}
                  type="checkbox"
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                />

                <span className="text-sm text-gray-900">{listTodo.todo}</span>
              </div>

              <Button
                className="text-gray-400 hover:text-red-500 cursor-pointer active:scale-95"
                text={<TrashIcon className="h-5 w-5" />}
                onClick={() => openModal(listTodo.id)}
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default TodoList;
