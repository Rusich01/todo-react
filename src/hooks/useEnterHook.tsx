import { useTodoStore } from "../store/TodoStore";

export const useEnterHooks = ({ inputAddTodo, timeoutRef }: any) => {
  const { addWaitListsTodo, openMessage, addTodo, closeMessage } =
    useTodoStore();

  const addTodoClick = () => {
    const inputValue = inputAddTodo.current?.value;

    if (!inputValue?.trim()) return;
    addWaitListsTodo(inputValue);
    inputAddTodo.current!.value = "";
    openMessage();

    timeoutRef.current = setTimeout(() => {
      addTodo(inputValue);
      closeMessage();
      timeoutRef.current = null;
      inputAddTodo.current!.value = "";
    }, 1000);
  };

  const removeTimeout = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      closeMessage();
      inputAddTodo.current!.value = "";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodoClick();
    }
  };
  return {
    addTodoClick,
    removeTimeout,
    handleKeyDown,
  };
};
