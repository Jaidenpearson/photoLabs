import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photoInfo, setPhotoIsFavourited, photoIsFavourited, setSelectedPhoto }) => {

  //Renders modal on click and pulls similar photos underneath larger image
  const handleClick = () => {
    setSelectedPhoto(photoInfo)
  }
  
  return (
    <>
    <div className="photo-list__item">
      <PhotoFavButton 
        setPhotoIsFavourited={setPhotoIsFavourited} 
        photoIsFavourited={photoIsFavourited} 
        photoId={photoInfo.id}
        />
      <img className="photo-list__image" src={photoInfo.urls.regular} alt="" onClick={handleClick}/>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={photoInfo.user.profile} alt="" />
          <div>
            <div className="photo-list__user-info">{photoInfo.user.username}</div>
            <div className="photo-list__user-location">{photoInfo.location.city}, {photoInfo.location.country}</div>
          </div>
        </div>
      </div>
    </>
  )
};

export default PhotoListItem;
