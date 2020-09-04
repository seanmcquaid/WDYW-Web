import rootReducer, { ActionType } from "../index";
import Actions from "actions/types";

describe("rootReducer", () => {
  it("setLocation", () => {
    const state = {
      selectedLocation: {
        entity_id: "",
        title: "",
      },
      selectedCuisines: [],
    };

    const action: ActionType = {
      type: Actions.setLocation,
      payload: {
        selectedLocation: {
          entity_id: "",
          title: "",
        },
      },
    };
    expect(rootReducer(state, action)).toEqual({
      selectedLocation: {
        entity_id: "",
        title: "",
      },
      selectedCuisines: [],
    });
  });

  it("setCuisines", () => {
    const state = {
      selectedLocation: {
        entity_id: "",
        title: "",
      },
      selectedCuisines: [],
    };

    const action: ActionType = {
      type: Actions.setCuisines,
      payload: {
        selectedCuisines: [],
      },
    };
    expect(rootReducer(state, action)).toEqual({
      selectedLocation: {
        entity_id: "",
        title: "",
      },
      selectedCuisines: [],
    });
  });

  it("clearPreferences", () => {
    const state = {
      selectedLocation: {
        entity_id: "13333",
        title: "Atlanta, GA",
      },
      selectedCuisines: [],
    };

    const action: ActionType = {
      type: Actions.clearPreferences,
    };

    expect(rootReducer(state, action)).toEqual({
      selectedLocation: {
        entity_id: "",
        title: "",
      },
      selectedCuisines: [],
    });
  });
});
