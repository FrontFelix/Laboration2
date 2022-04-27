import { useState } from "react";
import { useUser } from "../contexts/LoginContext";
import loginUser from "../pappasTest/loginUser";
import Button from "@mui/material/Button";


function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { fetchUser } = useUser();
  async function signIN() {
    try {

      let newUserInputs = {
        name: username,
        password: password,
      };


      let response = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify(newUserInputs),
        headers: {
          "Content-Type": "application/json",
        }
      });
      // console.log(await loginUser())
      let data = await response.json()
      fetchUser(data)
      

      // console.log(data)
    } catch (err) {
      // console.error(err);
    }
  }


  const onSubmit = (e : any) => {
    e.preventDefault();
    signIN()
    console.log("refresh prevented");
  };
  return (
    <div>
      <form
        onSubmit={onSubmit}
        id="loginForm"
        className="login-form"
      >
        <label htmlFor="username">Username</label>
        <input required onChange={(e) => setUsername(e.target.value)} id="userUsername" type="text" />
        <label htmlFor="password">Password</label>
        <input required onChange={(e) => setPassword(e.target.value)} id="userPassword" type="password" />
        <Button type="submit" variant="contained">Log in</Button>    
      </form>
    </div>
  );
}

export default LoginPage;
