import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(
    {}
  );

  const setShowModal = (character) => {
    setSelectedCharacter(character);
    setIsModalActive(true);
  };

  const setHideModal = () => {
    setIsModalActive(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalActive,
        selectedCharacter,
        setShowModal,
        setHideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};