import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetail';
import CountrySelect from '../components/CountrySelect';
import FavouriteList from '../components/FavouriteList'
import './CountriesContainer.css';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [SelectedCountryCCA3Code, setSelectedCountryCCA3Code] = useState(null);
    const [favouriteCountries, setFavouriteCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }


 

    const onCountrySelected = (cca3) => {
        setSelectedCountryCCA3Code(cca3);
      }

    const selectedCountry = countries.find(
        country => country.cca3 === SelectedCountryCCA3Code
    )
  
  
    const totalPop = countries.reduce ((total, country) => {
      return total += country.population
    },0);

    const addToFavourites = (country) => {
      const newFavourites = [...favouriteCountries, country.name.common]
      const uniqueFavourites = [...new Set(newFavourites)]
      setFavouriteCountries(uniqueFavourites);
    }





    return (
        <div className="main-container">
            <div>
            <h2>Total population is {totalPop}</h2>
                <CountrySelect countries={countries} onCountrySelected={onCountrySelected}/>
                <h3>Favourites:</h3>
            <ul>
                <FavouriteList favouriteCountries={favouriteCountries}/>
                <p></p>
            </ul>
            </div>
            {SelectedCountryCCA3Code ?<CountryDetail country={selectedCountry} addToFavourites={addToFavourites} countries={countries}/> : null}
            


        </div>
    )
}

export default CountryContainer;
