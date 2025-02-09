import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({photoInfo}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
        <img className='.photo-details-modal__image' src={photoInfo.urls} />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
