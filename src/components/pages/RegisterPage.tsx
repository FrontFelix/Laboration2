import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function RegisterPage() {
  return (
    <div>
      <form action="" className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" />
        <label htmlFor="email">E-mail</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <Button variant="contained">Register</Button>        
      </form>

      <h1>Already a user?</h1>

      <Link to={"/login"}>
        <Button variant="contained">Go to login</Button>        
      </Link>
    </div>
  );
}

export default RegisterPage;
