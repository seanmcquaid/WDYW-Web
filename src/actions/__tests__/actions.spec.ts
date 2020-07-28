import { setLocation, setCuisines, clearPreferences } from '../index';

describe('Actions', () => {
  it('setLocation', () => {
    expect(setLocation({ entity_id: "0", title: "test" })).toEqual({
      type: 'SET_LOCATION',
      payload: {
        selectedLocation: {
          entity_id: "0",
          title: "test",
        },
      },
    })
  });

  it('setCuisines', () => {
    expect(setCuisines([])).toEqual({
      type: 'SET_CUISINES',
      payload: {
        selectedCuisines : [],
      },
    })
  });

  it('clearPreferences', () => {
    expect(clearPreferences()).toEqual({
      type: 'CLEAR_PREFERENCES',
    })
  });
});