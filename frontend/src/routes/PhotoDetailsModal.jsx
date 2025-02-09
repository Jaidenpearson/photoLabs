import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ photos, photoInfo, setSelectedPhoto, setPhotoIsFavourited, photoIsFavourited }) => {

 
  const similarPhotosArray = Object.values(photoInfo.similar_photos).map(photo => photo.id)
  console.log('similar photos array', similarPhotosArray)

  const filterMatchingPhotos = (similarphotosArray, photos) => {
    return photos.filter(photo => similarphotosArray.includes(photo.id));
  };

  const similarPhotos = filterMatchingPhotos(similarPhotosArray, photos)

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
      <div className='photo-details-modal__images photo-details-modal__header'>
        <PhotoFavButton 
            setPhotoIsFavourited={setPhotoIsFavourited}
            photoIsFavourited={photoIsFavourited}
            photoId={photoInfo.id}/>
        <img className='photo-details-modal__image' src={photoInfo.urls.full} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-list__user-profile" src={photoInfo.user.profile} alt="" />
          <div>
            <div className="photo-list__user-info">{photoInfo.user.username}</div>
            <div className="photo-list__user-location">{photoInfo.location.city}, {photoInfo.location.country}</div>
          </div>
        </div>
      </div>
      <PhotoList 
        photos={similarPhotos} 
        setPhotoIsFavourited={setPhotoIsFavourited} 
        photoIsFavourited={photoIsFavourited} 
        setSelectedPhoto={setSelectedPhoto}/>
    </div>
  )
};

export default PhotoDetailsModal;
