import { Link } from "react-router-dom";

function Header() {
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
        <h4 className="header-title">Inloggad som: </h4>
      </div>
    </div>
  );
}

export default Header;
