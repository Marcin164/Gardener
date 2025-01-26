import ReactModal from "react-modal";
import React from "react";

type Props = {
  isOpen: any;
  children: any;
  handleOpen: any;
};

const Modal = ({ isOpen, children, handleOpen }: Props) => {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <button className="absolute right-5 top-5" onClick={handleOpen}>
        X
      </button>
      {children}
    </ReactModal>
  );
};

export default Modal;
