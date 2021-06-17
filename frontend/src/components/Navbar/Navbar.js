import { Link } from "react-router-dom";
import FilterInput from "../FilterInput/FilterInput";
import codepath from "../../assets/codepath.svg";
import "./Navbar.css";

export default function Navbar(filterInputValue, handleOnInputChange) {
  return (
    <nav className="Navbar">
      <Link className="logo" to="/">
        <img src={codepath} alt="logo" />
      </Link>

      <div className="search">
        <FilterInput
          filterInputValue={filterInputValue}
          handleOnInputChange={handleOnInputChange}
        />
      </div>

      <div className="content">
        
        <div className="links">
          
          </div>
        {/* <div className="notifications">
          <i className="material-icons md-36">notifications</i>
          <div className="green-dot" />
        </div>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
          <div className="info">
            <p>Person McPerson</p>
            <span>ID: 12345567</span>
          </div>
        </div> */}
      </div>
    </nav>
  );
}
