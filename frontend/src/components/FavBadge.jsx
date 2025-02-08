import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, selected }) => {
  return (
    <div className='fav-badge'>
      <FavIcon selected={selected} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;