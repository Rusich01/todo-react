import { useTodoStore } from "../../store/TodoStore";
import EnterTodo from "../EnterTodo/EnterTodo";
import ModalWindow from "../modalWindow/modalWindow";
import TodoDone from "../todoDone/TodoDone";
import TodoItem from "../TodoItem/TodoItem";

const Todo = () => {
  const { isOpenedModal } = useTodoStore();

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/90 backdrop-blur-xl rounded-[28px] shadow-2xl p-5 mt-8">
        <h1 className="text-center text-xl font-semibold text-gray-900 mb-4">
          Todo list
        </h1>
        <EnterTodo />
        <TodoItem />
        <TodoDone />
        {isOpenedModal.open && <ModalWindow />}
      </div>
    </div>
  );
};

export default Todo;
