import {ADD_MARKER} from "../constants";

export function addMarker(marker) {
    console.log("ACTION: " + marker);
    return {
      type: ADD_MARKER,
      marker: marker,
    };
  }
  