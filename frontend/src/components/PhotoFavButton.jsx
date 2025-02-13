import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ setPhotoIsFavourited, photoIsFavourited, photoId }) {

  //Adds photo to favourite list in state and fills in heart icon 
  const handleClick = () => {
    setPhotoIsFavourited(photoId)
  }
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
          <FavIcon 
            selected={photoIsFavourited.includes(photoId)}
            />
      </div>
    </div>
  );
}

export default PhotoFavButton;