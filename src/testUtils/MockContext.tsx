import CityInfo from 'models/CityInfo';
import React, { createContext, useReducer } from 'react';
import rootReducer from 'reducers';

type MockGlobalStateType = {
  selectedLocation: CityInfo;
};

const initialState: MockGlobalStateType = {
  selectedLocation: {
    entity_id: '',
    title : '',
  },
};

const mockGlobalContextWithSetInitialState = (initialState: MockGlobalStateType) => createContext <{
  state: MockGlobalStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch : () => null
});

const MockGlobalContext = mockGlobalContextWithSetInitialState(initialState);

type Props = {
  children: React.ReactNode;
  initialState: MockGlobalStateType;
};

const MockGlobalContextProvider: React.FC<Props> = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <MockGlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </MockGlobalContext.Provider>
  )
};

export default MockGlobalContextProvider;