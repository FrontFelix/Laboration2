import getPosts from "../posts/getPosts";
import PostCard from "../posts/PostCard";
import React, { useState, useEffect } from "react";
import { CreateNewPost } from "../posts/CreateNewPost";
import { useUser } from "../contexts/LoginContext";
import PostCardNew from "../posts/PostCard2";
import { TextField } from "@mui/material";
import { CreateNewPostTEST } from "../posts/CreateNewPost copy";

function PostsPage() {
  // console.log(wagwan.get('session'))
  const { isLoggedIn, fetchUser, posts, fetchPosts } = useUser();

  useEffect(() => {
    fetchPosts();
    fetchUser();
  }, []);
  return (
    <div className="posts-page">
      {!isLoggedIn && <h4>Log in to create a new post</h4>}
        {isLoggedIn && <div>
          <CreateNewPostTEST/>
          <CreateNewPost/>
        </div>
        }
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
      </div>
      <h1>Recent posts</h1>
      <div className="postsContainer">
        {posts.map((post, index) => (
          <div key={index}>
            <PostCardNew post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
