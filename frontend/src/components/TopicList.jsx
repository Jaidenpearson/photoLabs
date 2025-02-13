import React from "react";
import { useState } from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics, setTopic }) => {

  //Selects topics from the top nav of the page and filters photos 
  const handleClick = (topic) => {
    setTopic(topic)
  }

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem 
          key={topic.id} 
          id={topic.id} 
          title={topic.title} 
          onClick={() => handleClick(topic)}/>
        ))}
    </div>
  );
};

export default TopicList;
