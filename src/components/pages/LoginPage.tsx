import { useUser } from "../contexts/LoginContext";
import loginUser from "../pappasTest/loginUser";
function LoginPage() {
  const { fetchUser } = useUser();
  return (
    <div>
      <form
        onSubmit={() => {
          loginUser();
          fetchUser();
        }}
        className="login-form"
      >
        <label htmlFor="username">Username</label>
        <input id="userUsername" type="text" />
        <label htmlFor="password">Password</label>
        <input id="userPassword" type="password" />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default LoginPage;
