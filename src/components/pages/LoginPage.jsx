import loginUser from "../pappasTest/loginUser";
import Button from "@mui/material/Button";
import { useUser } from "../contexts/LoginContext";

function LoginPage() {
  const { FetchLoggedInUser } = useUser()
  return (
    <div>
      <form onSubmit={() => {loginUser();FetchLoggedInUser()}} className="login-form">
        <label htmlFor="username">Username</label>
        <input id="userUsername" type="text" />
        <label htmlFor="password">Password</label>
        <input id="userPassword" type="password" />
        <Button type="submit" variant="contained">Log in</Button>        
      </form>
    </div>
  );
}

export default LoginPage;
