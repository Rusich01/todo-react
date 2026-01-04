import Input from "../Input/Input";
import Buttons from "../Button/Buttons";

const EnterTodo = () => {
  return (
    <div className="flex gap-2 mb-4">
      <Input
        type="text"
        placeholder="Add a new task…"
        className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Buttons
        className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium active:scale-95 hover:bg-blue-700 transition cursor-pointer"
        text="Add"
      />
    </div>
  );
};

export default EnterTodo;
