import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div>
      <form action="" className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" />
        <label htmlFor="firsname">First name</label>
        <input type="text" />
        <label htmlFor="lastname">Last name</label>
        <input type="text" />
        <label htmlFor="email">E-mail</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button>Register</button>
      </form>

      <h1>Already a user?</h1>

      <Link to={"/login"}>
        <button>
          <h2>Log in here</h2>
        </button>
      </Link>
    </div>
  );
}

export default RegisterPage;
