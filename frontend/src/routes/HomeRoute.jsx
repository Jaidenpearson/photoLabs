import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import LikedPhotos from 'components/LikedPhotos';
import '../styles/HomeRoute.scss';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const HomeRoute = ({ 
  photos, 
  topics, 
  setPhotoIsFavourited, 
  photoIsFavourited, 
  setSelectedPhoto, 
  setTopic,
  displayFavourites,
  areFavouritesDisplayed,
  favouritePhotos }) => {
  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        photoIsFavourited={photoIsFavourited}
        setTopic={setTopic}
        displayFavourites={displayFavourites}
        />
      {areFavouritesDisplayed 
      ? 
        <LikedPhotos
          photos={photos}
          favouritePhotos={favouritePhotos}
          setPhotoIsFavourited={setPhotoIsFavourited}
          setSelectedPhoto={setSelectedPhoto}
          />
        :       
        <PhotoList 
          photos={photos} 
          topics={topics} 
          setPhotoIsFavourited={setPhotoIsFavourited} 
          photoIsFavourited={photoIsFavourited}
          setSelectedPhoto={setSelectedPhoto}
          />}
    </div>
  );
};

export default HomeRoute;
