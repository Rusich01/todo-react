import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";
import { useTodoStore } from "../../store/TodoStore";

const EnterTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodoStore();

  const addTodoClick = () => {
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodoClick();
    }
  };
  return (
    <div className="flex gap-2 mb-4">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Add a new task…"
        className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button
        className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium active:scale-95 hover:bg-blue-700 transition cursor-pointer"
        text="Add"
        onClick={addTodoClick}
      />
    </div>
  );
};

export default EnterTodo;
