import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function RegisterPage() {
  return (
    <div className="main-div">
      <form action="" className="login-form">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          required
          InputLabelProps={{ required: false }}
        />
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          type="email"
          required
          InputLabelProps={{ required: false }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          required
          InputLabelProps={{ required: false }}
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
