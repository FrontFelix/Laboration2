import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TestButtons from "./TestButtons.jsx";



function Header() {

  // const [user, setUser] = useState({})

  useEffect(() => {
    async function getLogin() {
      let response = await fetch("http://localhost:8080/login", { method: "GET" })
      let data = await response.json()
      // console.log(data)
    }
    getLogin()
  })

  return (
    <div className="header-div">
      <div className="header-divs">
        <Link className="link-style" to={"/"}>
          <div className="header-title header-logo">K</div>
        </Link>
      </div>
      <div className="header-divs">
        <h1 className="header-title">KWITTER</h1>
      <TestButtons />
      </div>
      <div className="header-divs">
        <h4 className="header-title">Logged in as: </h4>
      </div>
    </div>
  );
}

export default Header;
