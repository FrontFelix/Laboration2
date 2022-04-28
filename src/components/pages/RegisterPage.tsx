import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function RegisterPage() {
  return (
    <div className="main-div">
      <form action="" className="login-form">
        {/* <label htmlFor="username">Username</label>
        <input required type="text" /> */}
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          required
        />
        {/* <label htmlFor="email">E-mail</label>
        <input required type="email" /> */}
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          type="email"
          required
        />
        {/* <label htmlFor="password">Password</label>
        <input required type="password" /> */}
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          required
        />
        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>

      <h1>Already a user?</h1>

      <Link to={"/login"}>
        <Button variant="contained">Go to login</Button>
      </Link>
    </div>
  );
}

export default RegisterPage;
