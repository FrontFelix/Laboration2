import loginUser from "../pappasTest/loginUser";
function LoginPage() {
  return (
    <div>
      <form onSubmit={loginUser} className="login-form">
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
