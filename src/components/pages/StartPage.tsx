import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function StartPage() {
  return (
    <div>
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
