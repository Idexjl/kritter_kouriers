import { useNavigate } from "react-router";
import UserProfile from "../../userProfile/UserProfile";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const navigateTo = (destination) => {
    navigate(destination);
  };

  return (
    <>
      <header className="main-header">
        <div className="app-badge">
          <img
            src="./logo.jpg"
            alt="Kritter Kouriers Logo"
            onClick={() => {
              navigateTo("/");
            }}
          />
        </div>
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li
              className="main-nav__item"
              onClick={() => {
                navigateTo("/unreliable");
              }}
            >
              Cone of Shame
            </li>
            <li
              className="main-nav__item"
              onClick={() => {
                navigateTo("/complete");
              }}
            >
              Completed Transports
            </li>
            <li
              className="main-nav__item"
              onClick={() => {
                alert("Coming Soon");
              }}
            >
              Post a Transport
            </li>
            <li
              className="main-nav__item"
              onClick={() => {
                alert("Coming Soon");
              }}
            >
              Search Open Transports
            </li>
            <li
              className="main-nav__item"
              onClick={() => {
                alert("Coming Soon");
              }}
            >
              Rate a Transport
            </li>
            <li
              className="main-nav__item"
              onClick={() => {
                navigateTo("/about");
              }}
            >
              About Us
            </li>
          </ul>
        </nav>
        <div className="user-area">
          <UserProfile />
        </div>
      </header>
    </>
  );
};

export default Header;
