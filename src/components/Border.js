import React from "react";

const Border = ({border, countries}) => {

    const borderCountry = countries.find(
        country => country.cca3 === border
    )

    const borderName = borderCountry.name.common
  
    return(
        <li>{borderName}</li>
    )

}

export default Border;