"use client";
import React, { createContext, useState } from "react";

type ModalContextProps = {
  children: React.ReactNode;
};
// Create the context
export const ModalContext = createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

// Create the ModalProvider component
export const ModalProvider = ({ children }: ModalContextProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const contextValue = {
    isModalOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
