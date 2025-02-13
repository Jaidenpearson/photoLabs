import React, { useReducer, useEffect } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import reducer, { ACTIONS } from "../src/hooks/reducer"
import { type } from '@testing-library/user-event/dist/type';


// Note: Rendering a single component to build components in isolation
const App = () => {

  //State of app on initial render

  const initialState = {
    favouritePhotos: [],
    selectedPhoto: "",
    photos: [],
    topics: [],
    displayPhotoDetails: false,
    selectedTopic: ""
  };

  //State management and action creators

  const [state, dispatch] = useReducer(reducer, initialState)
  

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

  const setTopic = (topic_Id) => {
    if (topic_Id === state.selectedTopic) {
      dispatch({type: ACTIONS.REMOVE_TOPIC, payload: topic_Id})
    } else {
      dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: topic_Id})
    }
  }

  const favPhotoAlert = () => {
    return favouritePhotos.length > 0 ? "" : true;
  };

  //Fetches to server for photos and topics

  useEffect(() => {
    if(state.selectedTopic) {
      fetch(`http://localhost:8001/api/topics/photos/${state.selectedTopic.id}`)
      .then((response) => response.json())
      .then(data => {
        dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data})
      })
      .catch(error => console.log("Error connecting to server", error))
    } else {
    fetch('http://localhost:8001/api/photos')
    .then((response) => response.json())
    .then(data => {
      dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data})
    })
    .catch(error => console.log("Error connecting to server", error))
    }
  }, [state.selectedTopic])

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
        setSelectedPhoto={onPhotoSelect}
        setTopic={setTopic}/>
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
