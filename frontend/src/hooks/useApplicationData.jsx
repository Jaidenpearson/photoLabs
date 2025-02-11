import { useState } from "react";

const useApplicationData = () => {
  const [favouritePhotos, setPhotoIsFavourited] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

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
    toggleFavourite
  };
};

export default useApplicationData;