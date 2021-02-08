import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import { SearchInput } from '../components/SerchInput';
import { connect } from "react-redux";
import { addMarker } from '../actions/markerAtion';

const googleMapsApiKey = "AIzaSyD1LqPNfReHlA4RTAU1YOuVKZxTqvCPa0g";
Geocode.setApiKey(googleMapsApiKey);

const mapStateToProps = state => {
	return {
		markers: state.markers
	}
}


const mapDispatchToProps = dispatch => {
	return {
		addMarker: (Marker) => dispatch(addMarker(Marker))
	}
}

class connectedMap extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		mapPosition: {
	// 			lat: this.props.center.lat,
	// 			lng: this.props.center.lng
	// 		}
	// 	}
	// }

	// onPlaceSelected = (place) => {
	// 	if (!place.geometry) {
	// 		return false;
	// 	}
	// 	const
	// 		latValue = place.geometry.location.lat(),
	// 		lngValue = place.geometry.location.lng();
	// 	this.props.addMarker({ lat: latValue, lng: lngValue })
	// 	this.setState({
	// 		mapPosition: {
	// 			lat: latValue,
	// 			lng: lngValue
	// 		}
	// 	})
	// };


	render() {
		const CustomMap = withScriptjs(
			withGoogleMap(
				props => (
					<GoogleMap google={this.props.google}
						defaultZoom={this.props.zoom}
						defaultCenter={{ lat: this.props.mapPosition.lat, lng: this.props.mapPosition.lng }}
					>
						{ this.props.markers && this.props.markers.map((marker, i) =>
							<Marker
								key={i}
								google={this.props.google}
								draggable={false}
								position={{ lat: marker.lat, lng: marker.lng }}
							/>
						)}
						<SearchInput
              value={this.props.value}
              onChange={this.props.onChange}
              inputStyle={this.props.inputStyle}
							onPlaceSelected={this.props.onPlaceSelected}
							types={['(regions)']}
						/>
					</GoogleMap>
				)
			)
		);
		let map;
		if (this.props.center.lat !== undefined) {
			map = <div>
				<CustomMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`}
					loadingElement={
						<div style={{ height: `100%` }} />
					}
					containerElement={
						<div style={{ height: this.props.height }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
				/>
			</div>
		}
		return (map)
	}
}

export default connectedMap;
