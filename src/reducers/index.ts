import CityInfo from "models/CityInfo";
import Actions from "actions/types";
import Cuisine from "models/Cuisine";

type GlobalStateType = {
  selectedLocation: CityInfo;
  selectedCuisines: Cuisine[];
};

export type ActionType =
  | { type: Actions.setLocation; payload: { selectedLocation: CityInfo } }
  | { type: Actions.setCuisines; payload: { selectedCuisines: Cuisine[] } }
  | { type: Actions.clearPreferences };

const initialState: GlobalStateType = {
  selectedLocation: {
    entity_id: "",
    title: "",
  },
  selectedCuisines: [],
};

const rootReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case Actions.setLocation:
      return {
        ...state,
        selectedLocation: action.payload.selectedLocation,
      };
    case Actions.setCuisines:
      return {
        ...state,
        selectedCuisines: action.payload.selectedCuisines,
      };
    case Actions.clearPreferences:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
