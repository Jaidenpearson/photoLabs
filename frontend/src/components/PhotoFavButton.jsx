import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [photoIsFavourited, setPhotoIsFavourited] = useState("False")

  const handleClick = () => {
    setPhotoIsFavourited(!photoIsFavourited)
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
          <FavIcon selected={!photoIsFavourited ? "True" : ""}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;