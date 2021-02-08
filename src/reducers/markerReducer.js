import {ADD_MARKER} from "../constants";

const initialState = {
    markers: [],
  };

  const markerReducer = (state = initialState, action) => {
    console.log("REDUCER: " + JSON.stringify(action));
    switch (action.type) {
      case ADD_MARKER:
        return {
          markers: state.markers.concat(action.marker)
      }
      default:
        return state;
    }
  };
  export default markerReducer;