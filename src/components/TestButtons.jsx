import { Link } from "react-router-dom";

function TestButtons() {
  return (
    <div className="button-div">
      <Link to={"/posts"}>
        <button>POSTS</button>
      </Link>
      {/* <Link to={"/admin"}>
        <button>ADMIN</button>
      </Link> */}
      <Link to={"/register"}>
        <button>REGISTER</button>
      </Link>
      <Link to={"/login"}>
        <button>LOGIN</button>
      </Link>
    </div>
  );
}

export default TestButtons;
