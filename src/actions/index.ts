import Actions from "./types";
import CityInfo from "models/CityInfo";
import Cuisine from "models/Cuisine";

export const setLocation = (selectedLocation: CityInfo) => ({
  type: Actions.setLocation,
  payload: {
    selectedLocation,
  },
});

export const setCuisines = (selectedCuisines: Cuisine[]) => ({
  type: Actions.setCuisines,
  payload: {
    selectedCuisines,
  },
});

export const clearPreferences = () => ({
  type: Actions.clearPreferences,
});
