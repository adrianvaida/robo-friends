import React from "react";
import './search-box.styles.scss';

export const SearcBox = ({ placeholder, handleChange }) => {

    return (
        <input 
            className='search' 
            type="text" 
            placeholder={placeholder} 
            onChange={handleChange}
        />
    )

}