import React, { createContext, useReducer } from 'react';
import rootReducer from 'reducers';

const initialState = {
  selectedLocation: null,
};

const GlobalContext = createContext({});

type Props = {
  children: React.ReactNode;
};

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalContextProvider;