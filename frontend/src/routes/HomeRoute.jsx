import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, setPhotoIsFavourited, photoIsFavourited }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos} topics={topics} setPhotoIsFavourited={setPhotoIsFavourited} photoIsFavourited={photoIsFavourited}/>
    </div>
  );
};

export default HomeRoute;
