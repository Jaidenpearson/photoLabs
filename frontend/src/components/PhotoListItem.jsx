import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({sampleDataForPhotoListItem}) => {
  
  return (
    <>
    <div className="photo-list__item">
      <PhotoFavButton onClick={() => console.log("clicked")}/>
      <img className="photo-list__image" src={sampleDataForPhotoListItem.imageSource} alt="" />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={sampleDataForPhotoListItem.profile} alt="" />
          <div>
            <div className="photo-list__user-info">{sampleDataForPhotoListItem.username}</div>
            <div className="photo-list__user-location">{sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}</div>
          </div>
        </div>
      </div>
    </>
  )
};

export default PhotoListItem;
