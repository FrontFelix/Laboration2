import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import HandleAddNewUser from "../functions/addNewUser";

function RegisterPage() {

  const navigate = useNavigate()
  const registerSubmit = async (e : any) => {
    e.preventDefault()
    let response = await HandleAddNewUser()
    if(!response?.ok) {
      if(response?.status === 409) {

        return alert('Username is taken!')
      }
      navigate('/login')
    }else {
      navigate('/login')
    }
  }

  return (
    <div className="main-div">
      <form onSubmit={registerSubmit} action="" className="login-form" id="addNewUserForm">
        <TextField
          id="register-uname"
          label="Username"
          variant="outlined"
          required
          InputLabelProps={{ required: false }}
          autoComplete="off"
        />
        <TextField
          id="register-email"
          label="E-mail"
          variant="outlined"
          type="email"
          required
          InputLabelProps={{ required: false }}
          autoComplete="off"
        />
        <TextField
          id="register-pword"
          label="Password"
          variant="outlined"
          type="password"
          required
          InputLabelProps={{ required: false }}
          autoComplete="off"
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
