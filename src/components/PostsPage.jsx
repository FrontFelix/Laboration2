import getPosts from "./pappasTest/getPostsTest";
import Cookies from "js-cookie"
import { PostCard } from "./Post";
import React, { useState, useEffect } from "react";

function PostsPage() {
  console.log(Cookies.get('session'))
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchFunction() {
      let data = await getPosts();
      setPosts(data);
    }
    // fetchFunction();
  });
  return (
    <div>
      These are my posts. There are many posts like these, but these are mine.
      <div className="test-post">
        <div>Christian</div>
        <div>Hej, idag åt jag röv och även lite godis.</div>
      </div>
      {posts.map((post, index) => (
        <div key={index}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export default PostsPage;
