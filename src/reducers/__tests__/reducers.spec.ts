import rootReducer from '../index';
import Actions from 'actions/types';

describe('rootReducer', () => {
  it('setLocation', () => {
    const state = {
      selectedLocation: {
        entity_id: '',
        title: '',
      },
    };

    const action = {
      type: Actions.setLocation,
      payload: {
        selectedLocation: {
          entity_id: '',
          title: '',
        },
      },
    };
    expect(rootReducer(state, action)).toEqual({
      selectedLocation: {
        entity_id: '',
        title: '',
      },
    });
  });

});