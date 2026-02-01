import { useRef } from "react";
import Button from "../Button/Button";
import { useModalView } from "../../hooks/useModalView";

const ModalView = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { deleteTodo, closeModal } = useModalView({ modalRef });

  return (
    <div className="fixed inset-0 flex items-center justify-center border border-[rgb(192_184_184)] rounded-[25px] overflow-hidden ">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div
        ref={modalRef}
        role="dialog"
        className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-xl animate-scaleIn"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-2 text-center">
          Are you sure?
        </h2>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            text="yes"
            className="rounded-xl px-4 py-2 text-sm bg-[rgb(212_245_219)] hover:bg-[rgb(172_233_185)] text-gray-600  transition cursor-pointer active:scale-95"
            onClick={deleteTodo}
          />

          <Button
            text="not yet"
            className="rounded-xl bg-[rgb(247_230_212)] hover:bg-[rgb(246_212_175)] px-4 py-2 text-sm font-medium text-gray-600 transition cursor-pointer active:scale-95"
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalView;
