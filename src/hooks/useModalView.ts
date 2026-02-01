import { useEffect, type RefObject } from "react";
import { useTodoStore } from "../store/TodoStore";

interface UseModalViewProps {
  modalRef: RefObject<HTMLDivElement | null>;
}

export const useModalView = ({ modalRef }: UseModalViewProps) => {
  const { isOpenedModal, closeModal, removeTodo } = useTodoStore();

  useEffect(() => {
    if (!isOpenedModal.open) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current?.contains(e.target as Node))
        closeModal();
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = originalStyle;
    };
  }, [closeModal, isOpenedModal]);

  const deleteTodo = () => {
    if (isOpenedModal.idTodo !== null) {
      removeTodo(isOpenedModal.idTodo, "completed");
      removeTodo(isOpenedModal?.idTodo, "active");
      closeModal();
    }
  };
  return { deleteTodo, closeModal };
};
