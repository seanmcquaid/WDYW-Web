import CityInfo from "models/CityInfo";
import Actions from 'actions/types';

type GlobalStateType = {
  selectedLocation: CityInfo | null;
};

type ActionType =
  | { type: Actions.setLocation, payload: { selectedLocation: CityInfo } };
  
const initialState: GlobalStateType = {
  selectedLocation: null,
};

const rootReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case Actions.setLocation:
      return {
        ...state,
        selectedLocation : action.payload.selectedLocation
      }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;