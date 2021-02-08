import React, { useState,useEffect } from 'react';
import Map from './components/Map';
import { useDispatch, useSelector } from "react-redux";
import { addMarker } from "./actions/markerAtion";
import './App.css';

function App () {
  const dispatch = useDispatch();
  const [mapPosition, setMapPosition] = useState({
    lat: 41.3922909,
    lng: 2.1655837
  });
  const [placeValue, setPlaceValue] = useState(null);

  const onPlaceSelected = (place) => {
    console.log("PLACE: " +JSON.stringify(place));
		if (!place.geometry) {
			return false;
		}
		const
			latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    dispatch(addMarker({ lat: latValue, lng: lngValue }));
    //this.props.addMarker({ lat: latValue, lng: lngValue })
    setMapPosition(
      {
        lat: latValue,
        lng: lngValue
      }
    );
  };
  console.log("MAP POSITION: " +JSON.stringify(mapPosition));
  const markers = useSelector((state) => state.marker.markers);
  console.log("MARKERS : " + JSON.stringify(markers));
    return (
    <div className="app-container">
      <div className="left-map">
        <Map
          center={{ lat: 41.3922909, lng: 2.1655837 }}
          height={'100vh'}
          zoom={10}
          inputStyle={"searck-input-left"}
          onPlaceSelected={onPlaceSelected}
          mapPosition={mapPosition}
          markers={markers}
        />
      </div>
      <div className="right-map">
        <Map
          center={{ lat: 41.3922909, lng: 2.1655837 }}
          height={'100vh'}
          zoom={12}
          inputStyle={"searck-input-right"}
          onPlaceSelected={onPlaceSelected}
          mapPosition={mapPosition}
          markers={markers}
        />
      </div>
    </div>

    );
}

export default App;
