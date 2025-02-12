import React, { useReducer, useEffect } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
// import photos from "mocks/photos";
// import topics from 'mocks/topics';
import reducer, { ACTIONS } from "../src/hooks/reducer"


// Note: Rendering a single component to build components in isolation
const App = () => {

  const initialState = {
    favouritePhotos: [],
    selectedPhoto: "",
    photos: [],
    topics: [],
    displayPhotoDetails: false
  };
  

  const onPhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
  };
  
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: "" });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false });
  };

  const toggleFavourite = (id) => {
    if (initialState.favouritePhotos.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
    }
  };

  const favPhotoAlert = () => {
    return favouritePhotos.length > 0 ? "" : true;
  };

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
    .then((response) => response.json())
    .then(data => {
      dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data})
    })
    .catch(error => console.log("Error connecting to server", error))
    }, [])

  useEffect(() => {
      fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then(data => {
        dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data})
      })
      }, [])


  return (
    <div className="App">
      <HomeRoute 
        photos={state.photos} 
        topics={state.topics} 
        photoIsFavourited={state.favouritePhotos} 
        setPhotoIsFavourited={toggleFavourite}
        favPhotoAlert={favPhotoAlert}
        setSelectedPhoto={onPhotoSelect}/>
        {state.selectedPhoto !== "" 
        ? <PhotoDetailsModal
            photos={state.photos} 
            photoIsFavourited={state.favouritePhotos} 
            setPhotoIsFavourited={toggleFavourite}
            setSelectedPhoto={onPhotoSelect}
            photoInfo={state.selectedPhoto}
            onClosePhotoDetailsModal={onClosePhotoDetailsModal}/>
        : null}
    </div>
  );
};

export default App;
