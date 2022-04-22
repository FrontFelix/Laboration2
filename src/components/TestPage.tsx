import { CSSProperties } from "react";
import getUsers from "./pappasTest/test2";
import getPosts from "./pappasTest/test3";

function TestPage() {
  return (
    <div>
      <div style={boxStyle}>
        <h2>HejHej</h2>
        <button onClick={getUsers}>Test Users</button>
        <button onClick={getPosts}>Test Posts</button>

        <div id="userContainer"></div>
      </div>
    </div>
  );
}

const boxStyle: CSSProperties = {
  background: "blue",
  height: "20rem",
  width: "20rem",
};

export default TestPage;
