import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "./contexts/LoginContext";


function Header() {
  const {loggedInUser} = useUser()
  console.log(loggedInUser)


  // useEffect(() => {
  //   async function getLogin() {
  //     let response = await fetch('http://localhost:8080/login')
  //     console.log(response)
  //   }
  //   getLogin()
  // })

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
        <h4 className="header-title">Logged in as: {loggedInUser.username}</h4>
      </div>
    </div>
  );
}

export default Header;
