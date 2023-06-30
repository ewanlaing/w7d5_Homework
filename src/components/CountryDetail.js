import React from "react";
import Border from '../components/Border';

const CountryDetail = ({country, addToFavourites, countries}) => {

  const handleForSubmit = (event) => {
    event.preventDefault()
    addToFavourites(country)
  }


const borders = country.borders.map((border)=>{
    if(!country.borders){
        return <h1>None</h1>
}else{
        return <Border border={border} countries={countries}></Border>
   

}})

// const borders = function(){
//         country.borders.map((border) => {
//             return <Border border={border} countries={countries}/>
       
//     })}


 

  



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