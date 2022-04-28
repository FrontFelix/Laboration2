import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useUser } from "../contexts/LoginContext";
import PostCardNew from "../posts/PostCard2";

function StartPage() {


  return (
    <div className="main-div">
      <h1>WELCOME</h1>
      <h1>
        Join <span id="specialK">K</span>WITTER today
      </h1>
      <Link to={"/register"}>
              <Button variant="contained">Register</Button>
      </Link>
      <h2>Already registered?</h2>
      <Link to={"/login"}>
              <Button variant="contained">Login</Button>
      </Link>
    </div>
  );
}

export default StartPage;
