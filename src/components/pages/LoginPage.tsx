import loginUser from "../pappasTest/loginUser";
function LoginPage() {
<<<<<<< Updated upstream:src/components/pages/LoginPage.jsx
  return (
    <div>
      <form onSubmit={loginUser} className="login-form">
=======
  // const { FetchLoggedInUser } = useUser()
  return (
    <div>
      <form onSubmit={() => console.log('wagwan')} className="login-form">
>>>>>>> Stashed changes:src/components/pages/LoginPage.tsx
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
