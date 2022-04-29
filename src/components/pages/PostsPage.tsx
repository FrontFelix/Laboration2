import React, { useEffect } from "react";
import { useUser } from "../contexts/LoginContext";
import { CreateNewPost } from "../posts/CreateNewPost";
import PostCard from "../posts/PostCard";

function PostsPage() {
  const { isLoggedIn, fetchUser, posts, fetchPosts } = useUser();

  useEffect(() => {
    fetchPosts();
    fetchUser();
  }, []);
  return (
    <div className="posts-page">
      {!isLoggedIn && <h4>Log in to create a new post</h4>}
        {isLoggedIn && <div>
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
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
