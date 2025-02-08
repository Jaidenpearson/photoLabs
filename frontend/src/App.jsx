import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from "mocks/photos";
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favouritePhotos, setPhotoIsFavourited] = useState([])

  console.log(favouritePhotos.length)

  const favPhotoAlert = () => {
    favouritePhotos.length > 0 ? "" : true
  }

  const toggleFavourite = (id) => {
    setPhotoIsFavourited((favourites) => 
      favourites.includes(id)
        ? favourites.filter((photoId) => photoId !== id)
        : [...favourites, id]
      )
    }

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        photoIsFavourited={favouritePhotos} 
        setPhotoIsFavourited={toggleFavourite}
        favPhotoAlert={favPhotoAlert}/>
    </div>
  );
};

export default App;
