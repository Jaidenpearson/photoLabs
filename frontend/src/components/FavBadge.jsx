import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ 
  isFavPhotoExist, 
  selected,
  displayFavourites }) => {

  const handleClick = () => {
    displayFavourites()
    console.log("clicked")
  }

  return (

    <div className='fav-badge'>
      <FavIcon 
        selected={selected} 
        displayAlert={!!isFavPhotoExist}
        onClick={handleClick}
        />
    </div>
  ) 
};

export default FavBadge;