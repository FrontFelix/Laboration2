import { useState } from "react";
import { useUser } from "../contexts/LoginContext";
import loginUser from "../pappasTest/loginUser";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import PostsPage from "./PostsPage";
import { TextField } from "@mui/material";

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
      // console.log(await loginUser())
      navigate("/posts");

      // console.log(data)
    } catch (err) {
      // console.error(err);
    }
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    signIN();
    console.log("refresh prevented");
  };
  return (
    <div className="main-div">
      <form onSubmit={onSubmit} id="loginForm" className="login-form">
        {/* <label htmlFor="username">Username</label>
        <input
          required
          onChange={(e) => setUsername(e.target.value)}
          id="userUsername"
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          id="userPassword"
          type="password"
        /> */}
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          required
          onChange={(e) => setUsername(e.target.value)}
          InputLabelProps={{ required: false }}
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="Password"
          variant="outlined"
          required
          onChange={(e) => setPassword(e.target.value)}
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
