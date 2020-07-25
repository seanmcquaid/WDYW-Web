import { setLocation } from '../index';

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
});