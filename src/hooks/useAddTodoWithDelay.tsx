import { useTodoStore } from "../store/TodoStore";

export const useAddTodoWithDelay = ({ inputAddTodo, timeoutRef }: any) => {
  const { addWaitListsTodo, openMessage, addTodo, closeMessage } =
    useTodoStore();

  const clearExistingTimeout = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const addTodoClick = () => {
    const inputValue = inputAddTodo.current?.value;

    if (!inputValue) return;

    if (!inputValue?.trim()) return;
    addWaitListsTodo(inputValue);
    if (inputAddTodo.current) {
      inputAddTodo.current.value = "";
    }
    clearExistingTimeout();
    openMessage();

    timeoutRef.current = setTimeout(() => {
      addTodo(inputValue);
      closeMessage();
      timeoutRef.current = null;
      if (inputAddTodo.current) {
        inputAddTodo.current.value = "";
      }
    }, 1000);
  };

  const removeTimeout = () => {
    if (timeoutRef.current !== null) {
      clearExistingTimeout();
      closeMessage();
      timeoutRef.current = null;
      inputAddTodo.current.value = "";
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
