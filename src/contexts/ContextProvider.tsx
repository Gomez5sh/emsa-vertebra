import React, { createContext, useContext, useState, Context } from "react";

export interface ContextProviderProps {
  activeMenu?: boolean;
  screenSize?: number;
  login?: boolean;
  user?: any;
  setUser?: (user: any) => void | undefined;
  setLogin?: (value: boolean) => void | undefined;
  setActiveMenu?: (activeMenu: boolean) => void | undefined;
  setScreenSize?: (screenSize: number) => void | undefined;
}

export const sampleAppContext: ContextProviderProps = {
  activeMenu: false,
  login: false,
  user: {
    name: "",
    password: "",
  },
  setUser: (user: any) => {
    sampleAppContext.user = user;
  },
  setActiveMenu: () => {},
  setLogin: () => {},
};
export const StateContext: Context<ContextProviderProps> =
  createContext<ContextProviderProps>(sampleAppContext);

export interface AuthProviderProps {
  children?: React.ReactNode;
}

export const ContextProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState(sampleAppContext.activeMenu);
  const [screenSize, setScreenSize] = useState(sampleAppContext.screenSize);
  const [login, setLogin] = useState(sampleAppContext.login);
  const [user, setUser] = useState(sampleAppContext.user);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        login,
        setLogin,
        user,
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useContextState = (): ContextProviderProps => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useContextState must be used within a ContextProvider");
  }
  return context;
};
