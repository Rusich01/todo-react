import Input from "../Input/Input";

const TodoDone = () => {
  return (
    <>
      <h2 className="text-xs uppercase tracking-wide text-gray-500 mt-6 mb-2">
        Done list
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center justify-between bg-gray-100 rounded-xl px-3 py-3">
          <div className="flex items-center gap-3">
            <Input
              type="checkbox"
              checked
              className="w-5 h-5 accent-green-600 cursor-pointer"
            />

            <span className="text-sm text-gray-500 line-through">
              Buy groceries
            </span>
          </div>
          <button className="text-gray-400 hover:text-red-500 cursor-pointer">
            🗑
          </button>
        </li>
      </ul>
    </>
  );
};

export default TodoDone;
