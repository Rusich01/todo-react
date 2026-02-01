import type { RefObject } from "react";
import { useTodoStore } from "../store/TodoStore";

interface UseAddTodoWithDelayProps {
  inputAddTodo: RefObject<HTMLInputElement | null>;
  timeoutRef: RefObject<ReturnType<typeof setTimeout> | null>;
}

export const useAddTodoWithDelay = ({
  inputAddTodo,
  timeoutRef,
}: UseAddTodoWithDelayProps) => {
  const { addPendingTodos, openMessage, addTodo, closeMessage } =
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

  const addTodoClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputAddTodo.current?.value;

    if (!inputValue?.trim()) return;

    addPendingTodos(inputValue);
    clearInput();
    openMessage();
    clearExistingTimeout();

    timeoutRef.current = setTimeout(() => {
      addTodo(inputValue);
      closeMessage();
      clearInput();
      clearExistingTimeout();
    }, 1000);
  };

  const removeTimeout = () => {
    if (timeoutRef.current !== null) {
      clearExistingTimeout();
      closeMessage();
      clearInput();
    }
  };

  return {
    addTodoClick,
    removeTimeout,
  };
};
