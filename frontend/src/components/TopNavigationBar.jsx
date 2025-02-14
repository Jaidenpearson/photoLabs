import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ 
  topics, 
  photoIsFavourited, 
  setTopic,
  displayFavourites }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
        topics={topics} 
        setTopic={setTopic}
          />
      <FavBadge 
        selected={"true"}isFavPhotoExist={photoIsFavourited.length ? true : ""}
        displayFavourites={displayFavourites}
        />
    </div>
  )
}

export default TopNavigation;