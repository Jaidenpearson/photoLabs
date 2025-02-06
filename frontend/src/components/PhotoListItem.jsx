import React from "react";
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({sampleDataForPhotoListItem}) => {
  
  return (
    <>
    <div>
      <img src={sampleDataForPhotoListItem.imageSource} alt="" />
      <div>
        <img src={sampleDataForPhotoListItem.profile} alt="" />
        <div>
          <p>{sampleDataForPhotoListItem.username}</p>
          <p>{sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}</p>
        </div>
      </div>
    </div>
    </>
  )
};

export default PhotoListItem;
