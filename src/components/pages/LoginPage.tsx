import loginUser from "../pappasTest/loginUser";
function LoginPage() {
  // const { FetchLoggedInUser } = useUser()
  return (
    <div>
      <form onSubmit={() => console.log('wagwan')} className="login-form">
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
