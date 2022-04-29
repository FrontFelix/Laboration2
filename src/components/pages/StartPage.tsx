import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function StartPage() {


  return (
    <div className="main-div front-page">
      <div className="main-div">
      <h1>WELCOME</h1>
      <h1>
        Join <span id="specialK">K</span>WITTER today
      </h1>
      <Link to={"/register"}>
              <Button variant="contained">Register</Button>
      </Link>
      </div>
      <div className="main-div">
      <h2>Already registered?</h2>
      <Link to={"/login"}>
              <Button variant="contained">Login</Button>
      </Link>
      </div>
      <div className="main-div">
      <h2>View recent posts if you don't wanna register 😡</h2>
      <Link to={"/posts"}>
              <Button variant="contained">Posts</Button>
      </Link>
      </div>
    </div>
  );
}

export default StartPage;
