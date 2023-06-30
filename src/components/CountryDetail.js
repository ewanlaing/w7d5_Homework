import React from "react";
import Border from '../components/Border';

const CountryDetail = ({country, addToFavourites}) => {

  const handleForSubmit = (event) => {
    event.preventDefault()
    addToFavourites(country)
  }


const borders = country.borders.map((border)=>{
    if(country.borders.length > 0){
        return <Border border={border}></Border>
    }else{
        return<h2>None</h2>

}})

 

  



  return(
    <>
    <div>
        <p>The capital of {country.flag}{country.name.common} is {country.capital}</p>
        <p> The neighbouring countries are:</p>
        <ul>
            {borders}
        </ul>
        <form onSubmit={handleForSubmit}>
            <label for="favouritesubmit">Add to Favourites</label>
            <input type="submit"></input>
        </form>
        </div>
    </>
  )
};

export default CountryDetail;