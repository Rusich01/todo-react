import type { RefObject } from "react";
import { useTodoStore } from "../store/TodoStore";

interface UseAddTodoWithDelayProps {
  inputAddTodo: RefObject<HTMLInputElement | null>;
  timeoutRef: RefObject<number | null>;
}

export const useAddTodoWithDelay = ({
  inputAddTodo,
  timeoutRef,
}: UseAddTodoWithDelayProps) => {
  const { addWaitListsTodo, openMessage, addTodo, closeMessage } =
    useTodoStore();

  const clearExistingTimeout = () => {
    if (timeoutRef.current === null) return;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };
  const clearInput = () => {
    if (inputAddTodo.current === null) return;
    inputAddTodo.current.value = "";
  };

  const addTodoClick = () => {
    const inputValue = inputAddTodo.current?.value;

    if (!inputValue) return;
    if (!inputValue?.trim()) return;

    addWaitListsTodo(inputValue);
    clearInput();
    clearExistingTimeout();
    openMessage();

    timeoutRef.current = setTimeout(() => {
      addTodo(inputValue);
      closeMessage();
      clearInput();

      timeoutRef.current = null;
    }, 1000);
  };

  const removeTimeout = () => {
    if (timeoutRef.current !== null) {
      timeoutRef.current = null;

      clearExistingTimeout();
      closeMessage();
      clearInput();
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
