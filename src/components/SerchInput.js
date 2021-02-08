import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import "../assets/styles.css";

export const SearchInput = (props) => (
    <Autocomplete
        onChange={props.onChange}
        value={props.value}
        className={props.inputStyle}
        onPlaceSelected={props.onPlaceSelected}
        types={['(regions)']}
    />
)
