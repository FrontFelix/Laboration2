import { Link } from "react-router-dom";

function StartPage() {
  return (
    <div>
      <h1>WELCOME</h1>
      <h1>
        Join <span id="specialK">K</span>WITTER today
      </h1>
      <Link to={"/register"}>
        <button>
          <h1>Register</h1>
        </button>
      </Link>
      <h2>Already registered?</h2>
      <Link to={"/login"}>
        <button>
          <h2>Log in</h2>
        </button>
      </Link>
    </div>
  );
}

export default StartPage;
