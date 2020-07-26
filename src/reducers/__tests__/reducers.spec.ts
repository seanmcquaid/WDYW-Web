import rootReducer, {ActionType} from '../index';
import Actions from 'actions/types';

describe('rootReducer', () => {
  it('setLocation', () => {
    const state = {
      selectedLocation: {
        entity_id: '',
        title: '',
      },
      selectedCuisines: [],
    };

    const action: ActionType = {
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
      selectedCuisines: [],
    });
  });

});