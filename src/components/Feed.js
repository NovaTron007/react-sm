import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";

// custom css for component
import "../Feed.css";

function Feed() {
  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* tweet box */}
      <TweetBox />
      {/* post*/}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
