import React from 'react';

const searchBar = (props) => {
    let searchPlaceHolder = props.placeHolderText;
    return (
        <input className="SearchFilter" value={props.filterText} type="text" 
            placeholder={searchPlaceHolder} onChange={(event) => props.filterOnchange(event.target.value)}></input>
    )
}

export default searchBar;