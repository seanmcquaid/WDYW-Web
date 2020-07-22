import CityInfo from 'models/CityInfo';
import React, { createContext, useReducer } from 'react';
import rootReducer from 'reducers';

type GlobalState = {
  selectedLocation: CityInfo | null;
};

const initialState: GlobalState = {
  selectedLocation: null,
};

const GlobalContext = createContext <{
  state: GlobalState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch : () => null
});

type Props = {
  children: React.ReactNode;
};

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
};

export default GlobalContextProvider;