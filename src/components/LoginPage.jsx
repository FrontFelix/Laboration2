import loginUser from "./pappasTest/loginUser";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div>
                <form id="loginForm" onSubmit={loginUser} className="login-form">
                <label htmlFor="username">Username</label>
                <input id="userUsername" type="text" />
                <label htmlFor="password">Password</label>
                <input id="userPassword" type="password" />
                <button>Log in</button>
            </form>
      <h1>Not a member?</h1>
      <Link to={"/register"}>
        <button>
          <h1>Go to register</h1>
        </button>
      </Link>
    </div>
  );
}

export default LoginPage;
