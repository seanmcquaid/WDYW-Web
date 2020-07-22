import Actions from './types';
import CityInfo from 'models/CityInfo';

export const setLocation = (selectedLocation: CityInfo) => ({
  type: Actions.setLocation,
  payload: {
    selectedLocation,
  },
})