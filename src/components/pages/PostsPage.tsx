import getPosts from "../posts/getPosts";
import PostCard from "../posts/PostCard";
import React, { useState, useEffect } from "react";
import { CreateNewPost } from "../posts/CreateNewPost";
import { useUser } from "../contexts/LoginContext";
import RecipeReviewCard from "../posts/PostCard2";
import { TextField } from "@mui/material";

function PostsPage() {
  // console.log(wagwan.get('session'))
  const { isLoggedIn, fetchUser, posts, fetchPosts } = useUser();

  useEffect(() => {
    fetchPosts();
    fetchUser();
  }, []);
  return (
    <div className="posts-page">
      <RecipeReviewCard />
      <div>
        <TextField
          id="outlined-basic"
          label="Post title"
          variant="outlined"
          required
          InputLabelProps={{ required: false }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Share your thoughts..."
          multiline
          rows={4}
          required
          InputLabelProps={{ required: false }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {!isLoggedIn && <h4>Log in to create a new post</h4>}
        {isLoggedIn && <CreateNewPost />}
      </div>
      <h1>Recent posts</h1>
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
