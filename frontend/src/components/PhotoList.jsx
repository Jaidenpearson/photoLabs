import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ photos }) => {
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
