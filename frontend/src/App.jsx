import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from "mocks/photos";
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [photoIsFavourited, setPhotoIsFavourited] = useState("False")

  const handleClick = () => {
    setPhotoIsFavourited(!photoIsFavourited)
  }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} photoIsFavourited={photoIsFavourited} setPhotoIsFavourited={setPhotoIsFavourited}/>
    </div>
  );
};

export default App;
