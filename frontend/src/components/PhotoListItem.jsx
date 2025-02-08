import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photoInfo, setPhotoIsFavourited, photoIsFavourited }) => {
  
  return (
    <>
    <div className="photo-list__item">
      <PhotoFavButton setPhotoIsFavourited={setPhotoIsFavourited} photoIsFavourited={photoInfo}/>
      <img className="photo-list__image" src={photoInfo.urls.regular} alt="" />
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
