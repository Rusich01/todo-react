import { useTodoStore } from "../../store/todo-store";
import { createPortal } from "react-dom";
import ModalView from "./Modal-view";

const ModalRoot = () => {
  const { isOpenedModal } = useTodoStore();

  if (!isOpenedModal.open) return null;

  return createPortal(<ModalView />, document.body);
};

export default ModalRoot;
