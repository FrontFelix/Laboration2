import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function TestButtons() {
  return (
    <div className="button-div">
      <Link to={"/posts"}>
      <Button variant="contained">POSTS</Button>  
      </Link>
      {/* <Link to={"/admin"}>
        <button>ADMIN</button>
      </Link> */}
      <Link to={"/register"}>
        <Button variant="contained">Register</Button>
      </Link>
      <Link to={"/login"}>
        <Button variant="contained">LOGIN</Button>      
      </Link>
    </div>
  );
}

export default TestButtons;
