import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from "mocks/photos";
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favouritePhotos, setPhotoIsFavourited] = useState([])
  const [selectedPhoto, setSelectedPhoto] = useState("")

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

    console.log('selected photo', selectedPhoto)

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        photoIsFavourited={favouritePhotos} 
        setPhotoIsFavourited={toggleFavourite}
        favPhotoAlert={favPhotoAlert}
        setSelectedPhoto={setSelectedPhoto}/>
        {selectedPhoto !== "" ? <PhotoDetailsModal photoInfo={selectedPhoto}/> : null}
    </div>
  );
};

export default App;
