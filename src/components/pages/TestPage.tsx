import { CSSProperties } from "react";
import getUsers from "../pappasTest/getUsersTest";
import getPosts from "../pappasTest/getPostsTest";
import HandleAddNewPost from "../pappasTest/addNewPostTest";
import HandleAddNewUser from "../pappasTest/addNewUserTest";

function TestPage() {
  return (
    <div style={{ display: "flex" }}>
      <div style={boxStyle}>
        <h2>HejHej</h2>
        <button onClick={getUsers}>Test Users</button>
        <button onClick={getPosts}>Test Posts</button>

        <div id="userContainer"></div>
      </div>
      <div style={boxStyle2}>
        <div>
          <h2>new post</h2>
          <form
            id="addNewPostForm"
            style={formStyle}
            onSubmit={HandleAddNewPost}
          >
            <label htmlFor="postTitle">Title</label>
            <input type="text" name="title" id="titleInput" required />

            <label htmlFor="postContent">Type content</label>
            <input type="text" name="content" id="contentInput" required />
            <button type="submit" id="submitPostButton">
              Add post
            </button>
          </form>
        </div>
        <div>
          <h2>New user</h2>
          <form
            id="addNewUserForm"
            style={formStyle}
            onSubmit={HandleAddNewUser}
          >
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="usernameInput" required />

            <label htmlFor="realName">Your name</label>
            <input type="text" name="realName" id="realNameInput" required />

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" required />

            <label htmlFor="realName">Password</label>
            <input type="text" name="password" id="password" required />
            <button type="submit" id="submitPostButton">
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const boxStyle: CSSProperties = {
  background: "blue",
  height: "40rem",
  width: "20rem",
  margin: "1rem",
  color: "white",
  gap: "1rem",
};
const boxStyle2: CSSProperties = {
  background: "blue",
  height: "40rem",
  width: "20rem",
  margin: "1rem",
  display: "flex",
  flexDirection: "column",
  color: "white",
  gap: "1rem",
};

const formStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
  gap: "1rem",
};

export default TestPage;
