import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
      <div className="bg-[#f1f1f1] w-[730px] h-auto rounded-lg shadow-lg relative mt-auto mb-auto">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between bg-[#34bcff] p-4 rounded-t-lg h-[70px]">
          <h2 className="text-xl font-semibold text-gray-900 ml-8">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 text-2xl hover:text-black mr-4"
          >
            &times;
          </button>
        </div>

        {/* Modal content */}
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
