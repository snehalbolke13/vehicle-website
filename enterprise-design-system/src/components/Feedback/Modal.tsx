import React from "react";

type ModalProps = {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
};

const Modal = ({ isOpen, title, content, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-4">{content}</p>
        <button
          onClick={onClose}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
