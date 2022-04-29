import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useUser } from "./contexts/LoginContext";


function Header() {
  const {loggedInUser, isLoggedIn, signOut} = useUser()

  return (
    <div className="header-div">
      <div className="header-divs">
        {isLoggedIn ? 
                <Link className="link-style" to={"/posts"}>
                <div className="header-title header-logo ">K</div>
              </Link>
              :
              <Link className="link-style" to={"/"}>
              <div className="header-title header-logo ">K</div>
            </Link>
        }
      </div>
      <div className="header-divs">
        <h1 className="header-title">KWITTER</h1>
      </div>
        {isLoggedIn ? 
      <div className="header-divs w-button">
        <h4 className="header-title">Logged in as: {loggedInUser.username}</h4> 
        <Link to="/">
        <Button onClick={signOut} variant="contained">Logout</Button>
        </Link>
      </div>
        : 
      <div className="header-divs">
        <Link to="/login">
        <Button variant="contained">Login</Button>
        </Link>
      </div>
        }
    </div>
  );
}

export default Header;
