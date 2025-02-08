import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";


const PhotoList = () => {
  return (
    <ul className="photo-list">
        {photos.map((info) => (
          <li key={info.id}>
            <PhotoListItem photoInfo={info}/>
          </li>
      ))}
    </ul>
  );
};

export default PhotoList;
