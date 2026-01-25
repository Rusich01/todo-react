import { useTodoStore } from "../../store/TodoStore";
import { createPortal } from "react-dom";
import ModalView from "./ModalView";

const ModalRoot = () => {
  const { isOpenedModal } = useTodoStore();

  if (!isOpenedModal.open) return;
  return createPortal(<ModalView />, document.body);
};

export default ModalRoot;
