import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos, setPhotoIsFavourited, photoIsFavourited }) => {
  return (
    <ul className="photo-list">
        {photos.map((info) => (
          <li key={info.id}>
            <PhotoListItem photoInfo={info} setPhotoIsFavourited={setPhotoIsFavourited} photoIsFavourited={photoIsFavourited}/>
          </li>
      ))}
    </ul>
  );
};

export default PhotoList;
