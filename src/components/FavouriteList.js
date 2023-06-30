import React from "react";
import Favourite from "../components/Favourite"

const FavouriteList = ({favouriteCountries}) => {

    const List = favouriteCountries.map((country, index) => {
      return <Favourite country={country}/>
    })


    return(
        <div>
            <h1>FAVOURITES</h1>
                <ul>
                    {List}
                </ul>
        </div>
    )



}

export default FavouriteList