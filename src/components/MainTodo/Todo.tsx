import { useTodoStore } from "../../store/TodoStore";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import ModalView from "../ModalView/ModalView";
import CompletedTodoList from "../CompletedTodoList/CompletedTodoList";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
  const { isOpenedModal } = useTodoStore();

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm bg-white/90 backdrop-blur-xl rounded-[28px] shadow-2xl p-5 mt-8">
        <h1 className="text-center text-xl font-semibold text-gray-900 mb-4">
          Todo list
        </h1>

        <AddTodoForm />
        <TodoList />
        <CompletedTodoList />

        {isOpenedModal.open && <ModalView />}
      </div>
    </div>
  );
};

export default Todo;
