import getPosts from "./pappasTest/getPostsTest";
import { PostCard } from "./Post";
import React, { useState, useEffect } from "react";

function PostsPage() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchFunction() {
      let data = await getPosts();
      setPosts(data);
    }
    fetchFunction();
  });
  return (
    <div>
      These are my posts. There are many posts like these, but these are mine.
      {posts.map((post, index) => (
        <div key={index}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export default PostsPage;
