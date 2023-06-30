import React from 'react';
import './ListItem.css';

const ListItem = ({country, onCountryClicked}) => {

const handleClick = () => {
  console.log(`Clicked on ${country.name.common}`);
  onCountryClicked(country);
}


  return <li onClick={handleClick} value={country}>{country.name.common}{country.flag}</li>
}

export default ListItem;