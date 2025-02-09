import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photoInfo, setSelectedPhoto }) => {

  const handleClick = () => {
    setSelectedPhoto("")
  }

  return (
    <div className="photo-details-modal">
      <div className='photo-details-modal__top-bar'>
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
        <img className='.photo-details-modal__image' src={photoInfo.urls} />
      </button>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
