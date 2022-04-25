import getPosts from "./pappasTest/getPostsTest";
import { PostCard } from "./Post";
import React, { useState, useEffect } from "react";
import { CreateNewPost } from "./CreateNewPost";

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
      <p>
        These are my posts. There are many posts like these, but these are mine.
      </p>
      <div>
        <CreateNewPost />
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
