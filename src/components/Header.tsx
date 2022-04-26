import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Header() {

  const [user, setUser] = useState({})

  useEffect(() => {
    async function getLogin() {
      let response = await fetch('http://localhost:8080/login')
      console.log(response)
    }
    getLogin()
  })

  return (
    <div className="header-div">
      <div className="header-divs">
        <Link className="link-style" to={"/"}>
          <div className="header-title ptag ">K</div>
        </Link>
      </div>
      <div className="header-divs">
        <h1 className="header-title">KWITTER</h1>
      </div>
      <div className="header-divs">
        <h4 className="header-title">Logged in as: {user && user.username}</h4>
      </div>
    </div>
  );
}

export default Header;
