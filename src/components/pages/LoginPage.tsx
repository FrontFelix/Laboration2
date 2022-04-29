import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  async function signIN() {
    try {
      let newUserInputs = {
        name: username,
        password: password,
      };

      let response = await fetch("http://localhost:8080/account/login", {
        method: "POST",
        body: JSON.stringify(newUserInputs),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      navigate("/posts");
    } catch (err) {
      console.error(err);
    }
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    signIN();
  };
  return (
    <div className="main-div">
      <form onSubmit={onSubmit} id="loginForm" className="login-form">
        <TextField
          id="login-uname"
          label="Username"
          variant="outlined"
          required
          onChange={(e) => setUsername(e.target.value)}
          InputLabelProps={{ required: false }}
          autoComplete="off"
        />
        <TextField
          id="login-pword"
          type="password"
          label="Password"
          variant="outlined"
          required
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{ required: false }}
          autoComplete="off"
        />
        <Button type="submit" variant="contained">
          Log in
        </Button>
      </form>
      <h1>Not a member?</h1>
      <Link to="/register">
        <Button variant="contained">Register</Button>
      </Link>
    </div>
  );
}

export default LoginPage;
