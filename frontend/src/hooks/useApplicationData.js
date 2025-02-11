import { useState } from "react";

const useApplicationData = () => {
  const [favouritePhotos, setPhotoIsFavourited] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  function reducer (state, action) {

    if(action.type === "FAV_ADDED") {
      return favouritePhotos + action.value
    }

    if(action.type === "FAV_REMOVED") {
      return favouritePhotos - action.value
    }
    return state
  }

  const state = {
    favouritePhotos,
    selectedPhoto,
  };

  const onPhotoSelect = (photo) => {
    setSelectedPhoto(photo);
  };

  const onClosePhotoDetailsModal = () => {
    setSelectedPhoto("");
  };

  const favPhotoAlert = () => {
    return favouritePhotos.length > 0 ? "" : true;
  };

  const toggleFavourite = (id) => {
    setPhotoIsFavourited((favourites) =>
      favourites.includes(id)
        ? favourites.filter((photoId) => photoId !== id)
        : [...favourites, id]
    );
  };

  return {
    state,
    onPhotoSelect,
    onClosePhotoDetailsModal,
    favPhotoAlert,
    toggleFavourite,
    reducer
  };
};

export default useApplicationData;