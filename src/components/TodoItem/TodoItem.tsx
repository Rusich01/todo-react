import Buttons from "../Button/Buttons";
import Input from "../Input/Input";
import { TrashIcon } from "@heroicons/react/24/outline";

const TodoItem = () => {
  return (
    <>
      <h2 className="text-xs uppercase tracking-wide text-gray-500 mb-2">
        Todo list
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center justify-between bg-white rounded-xl px-3 py-3 shadow-md">
          <div className="flex items-center gap-3">
            <Input
              type="checkbox"
              className="w-5 h-5 accent-blue-600 cursor-pointer"
            />
            <span className="text-sm text-gray-900">Finish the report</span>
          </div>
          <Buttons
            className="text-gray-400 hover:text-red-500 cursor-pointer active:scale-95"
            text={<TrashIcon className="h-5 w-5" />}
          />
        </li>
      </ul>
    </>
  );
};

export default TodoItem;
