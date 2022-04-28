import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function RegisterPage() {
  return (
    <div className="main-div">
      <form action="" className="login-form">
        <label htmlFor="username">Username</label>
        <input required type="text" />
        <label htmlFor="email">E-mail</label>
        <input required type="email" />
        <label htmlFor="password">Password</label>
        <input required type="password" />
        <Button type="submit" variant="contained">Register</Button>        
      </form>

      <h1>Already a user?</h1>

      <Link to={"/login"}>
        <Button variant="contained">Go to login</Button>        
      </Link>
    </div>
  );
}

export default RegisterPage;
