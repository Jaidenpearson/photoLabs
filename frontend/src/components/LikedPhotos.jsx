import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/LikedPhotos.scss'

const LikedPhotos = ({ photos, favouritePhotos, setPhotoIsFavourited, setSelectedPhoto }) => {
  const likedPhotos = photos.filter(photo => favouritePhotos.includes(photo.id));

  return (
    <div className="liked-photos">
      <h2>Liked Photos</h2>
      <div className="liked-list">
        {likedPhotos.map(photo => (
          <PhotoListItem
            key={photo.id}
            photoInfo={photo}
            setPhotoIsFavourited={setPhotoIsFavourited}
            photoIsFavourited={favouritePhotos}
            setSelectedPhoto={setSelectedPhoto}
          />
        ))}
      </div>
    </div>
  );
};

export default LikedPhotos