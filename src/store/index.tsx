import CityInfo from "models/CityInfo";
import Cuisine from "models/Cuisine";
import React, { createContext, useReducer } from "react";
import rootReducer from "reducers";

type GlobalStateType = {
  selectedLocation: CityInfo;
  selectedCuisines: Cuisine[];
};

const initialState: GlobalStateType = {
  selectedLocation: {
    entity_id: "",
    title: "",
  },
  selectedCuisines: [],
};

export const GlobalContext = createContext<{
  state: GlobalStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
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
  );
};

export default GlobalContextProvider;
