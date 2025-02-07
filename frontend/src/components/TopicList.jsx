import React from "react";
import topics from "mocks/topics";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const listOfTopics = (data) => {
  const topicList = []
  for(let topic of data) {
    topicList.push(topic)
  }
  return [...new Set(topicList)]
}

const filteredTopics = listOfTopics(topics)

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {filteredTopics.map((topic) => (
        <TopicListItem key={topic.id} id={topic.id} title={topic.title} />
        ))}
    </div>
  );
};

export default TopicList;
