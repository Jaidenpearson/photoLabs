import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ photoInfo, setSelectedPhoto, setPhotoIsFavourited, photoIsFavourited }) => {

  const handleClick = () => {
    setSelectedPhoto("")
  }

  return (
    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar'>
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
        <img className='.photo-details-modal__image' src={null} />
      </button>
      </div>
      <PhotoListItem 
        photoInfo={photoInfo}
        setPhotoIsFavourited={setPhotoIsFavourited}
        photoIsFavourited={photoIsFavourited}/> 
    </div>
  )
};

export default PhotoDetailsModal;
