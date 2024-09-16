import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md mx-auto rounded shadow-lg p-6 relative">
        {children}
        <button
          className="absolute top-0 right-0 m-4 text-gray-500"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
}

export const ModalContent: React.FC<ChildrenProps> = ({ children }) => (
  <>{children}</>
);

export const ModalHeader: React.FC<ChildrenProps> = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const ModalTitle: React.FC<ChildrenProps> = ({ children }) => (
  <h2 className="text-xl font-bold">{children}</h2>
);

export const ModalDescription: React.FC<ChildrenProps> = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const ModalCloseButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => (
  <button
    className="absolute top-0 right-0 m-4 text-gray-500"
    onClick={onClick}
  >
    X
  </button>
);
