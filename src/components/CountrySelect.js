import React from "react";

const CountrySelect = ({countries, onCountrySelected}) => {


     const handleChange = (event) => {
       onCountrySelected(event.target.value)
     }
 

  return(
    <div>
       <select onChange={handleChange}> 
        <option selected="selected" disabled>Choose your Country</option>
        {countries.map (country => {
            return(
                <option key={country.cca3} value={country.cca3}>{country.flag}{country.name.common}</option>
            )
        })}
       </select> 
  </div>
  )
}

export default CountrySelect;