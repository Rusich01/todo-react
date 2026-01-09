import { useTodoStore } from "../store/TodoStore";

export const useEnterHooks = ({ inputAddTodo, timeoutRef }: any) => {
  const { addWaitListsTodo, openModal, addTodo, closeModal } = useTodoStore();

  const addTodoClick = () => {
    const inputValue = inputAddTodo.current?.value;

    if (!inputValue?.trim()) return;
    addWaitListsTodo(inputValue);
    openModal();

    timeoutRef.current = setTimeout(() => {
      addTodo(inputValue);
      closeModal();
      timeoutRef.current = null;
      inputAddTodo.current!.value = "";
    }, 1000);
  };

  const removeTimeout = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      closeModal();
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
