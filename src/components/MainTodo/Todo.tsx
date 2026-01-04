import Buttons from "../Button/Buttons";
import EnterTodo from "../EnterTodo/EnterTodo";
import TodoDone from "../todoDone/TodoDone";
import TodoItem from "../TodoItem/TodoItem";

const Todo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/90 backdrop-blur-xl rounded-[28px] shadow-2xl p-5 mt-8">
        <h1 className="text-center text-xl font-semibold text-gray-900 mb-4">
          TODO list
        </h1>

        <EnterTodo />
        {/* btn Cancel  */}
        <Buttons
          className="w-full text-sm text-red-500 mb-4 cursor-pointer"
          text="Cancel pending tasks"
        />
        <TodoItem />
        <TodoDone />
      </div>
    </div>
  );
};

export default Todo;
