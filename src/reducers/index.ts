import CityInfo from "models/CityInfo";
import Actions from 'actions/types';

type GlobalStateType = {
  selectedLocation: CityInfo;
};

type ActionType =
  | { type: Actions.setLocation, payload: { selectedLocation: CityInfo } };
  
const initialState: GlobalStateType = {
  selectedLocation: {
    entity_id: 0,
    title: '',
  },
}

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