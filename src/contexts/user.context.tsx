import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

//Tipagem dos dados
type UserContextType = {
  isUser: boolean;
};

//Tipagem das Props do contexto
type UserContextProps = {
  state: UserContextType;
  setState: Dispatch<SetStateAction<UserContextType>>;
};

//Valores Default do contexto
const DEFAULT_VALUE = {
  state: {
    isUser: false,
  },
  setState: () => {}, // função de inicialização e mudança de estado
};

//Cria a Context
export const UserContext = createContext<UserContextProps>(DEFAULT_VALUE);

//PROVEDOR DO CONTEXTO
const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
