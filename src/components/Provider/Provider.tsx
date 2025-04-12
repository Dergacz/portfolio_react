import React, { createContext, useState, useContext, ReactNode } from 'react';

interface IContext {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isSuccess: boolean;
  setIsSuccess: (value: boolean) => void;
  closePopup: () => void;
}

const Context = createContext<IContext>({} as IContext);

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
