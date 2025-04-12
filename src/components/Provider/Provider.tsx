import React, { createContext, useState, useContext, ReactNode } from 'react';

const Context: any = createContext({});

interface IProvider {
  children: ReactNode;
}

export const Provider = ({ children }: IProvider) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const closePopup = () => setIsOpen(false);

  return (
    <Context.Provider value={{ isOpen, setIsOpen, isSuccess, setIsSuccess, closePopup }}>
      {children}
    </Context.Provider>
  );
};

export const useMyContext = () => useContext(Context);
