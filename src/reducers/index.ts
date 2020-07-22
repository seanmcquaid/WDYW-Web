import CityInfo from "models/CityInfo";

type State = {
  selectedLocation: CityInfo | null;
};

type Action = {
  type: '';
  payload: CityInfo;
};

const initialState: State = {
  selectedLocation: null,
};

const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;