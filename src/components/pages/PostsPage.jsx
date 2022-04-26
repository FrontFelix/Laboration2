import getPosts from "../pappasTest/getPostsTest";
import { PostCard } from "../posts/PostCard";
import React, { useState, useEffect } from "react";
import { CreateNewPost } from "../posts/CreateNewPost";
import wagwan from "js-cookie";
import { DeletePost } from "../pappasTest/deletePostTEST";

function PostsPage() {
  // console.log(wagwan.get('session'))
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchFunction() {
      let data = await getPosts();
      setPosts(data);
    }
    fetchFunction();
  });
  return (
    <div className="posts-page">
      <p>
        These are my posts. There are many posts like these, but these are mine.
      </p>
      <div>
        <button onClick={DeletePost}>Ta bort post</button>
        <CreateNewPost />
      </div>
      <div className="postsContainer">
        {posts.map((post, index) => (
          <div key={index}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
