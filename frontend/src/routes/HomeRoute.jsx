import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const HomeRoute = ({ 
  photos, 
  topics, 
  setPhotoIsFavourited, 
  photoIsFavourited, 
  setSelectedPhoto, 
  setTopic }) => {
  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        photoIsFavourited={photoIsFavourited}
        setTopic={setTopic}/>
      <PhotoList 
        photos={photos} 
        topics={topics} 
        setPhotoIsFavourited={setPhotoIsFavourited} 
        photoIsFavourited={photoIsFavourited}
        setSelectedPhoto={setSelectedPhoto}/>
    </div>
  );
};

export default HomeRoute;
