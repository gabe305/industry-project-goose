import logo from "../../assets/Logos/logo.svg";
import ToggleSeason from "../ToggleSeason/ToggleSeason";
import "./HomeHeader.scss";
import ambassador from "../../assets/Icons/ambassador.svg";
import checkout from "../../assets/Icons/checkout.svg";
import profile from "../../assets/Icons/profile.svg";
import search from "../../assets/Icons/search.svg";

function HomeHeader({ isSpring, setIsSpring }) {
  return (
    <header className="header">
      <nav className="header__nav-left nav-left box">
        <ul className="nav-left__list">
          <li className="nav-left__link">WOMEN</li>
          <li className="nav-left__link">MEN</li>
          <li className="nav-left__link">KIDS</li>
          <li className="nav-left__link">HUMANATURE</li>
        </ul>
      </nav>
      <div className="header__center box">
        <img src={logo} alt="Canada Goose" className="header__logo" />
        <ToggleSeason isSpring={isSpring} setIsSpring={setIsSpring} />
      </div>
      <nav className="header__nav-right nav-right box">
        <ul className="nav-right__list">
          <li className="nav-right__link">
            <img src={ambassador} alt="Ambassador" className="nav-right__img" />
            Ambassador
          </li>
          <li className="nav-right__link">
            <img src={search} alt="Search" className="nav-right__img" />
            Search
          </li>
          <li className="nav-right__link">
            <img src={profile} alt="Profile" className="nav-right__img" />
            Profile
          </li>
          <li className="nav-right__link">
            <img src={checkout} alt="Checkout" className="nav-right__img" />
            Checkout
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HomeHeader;
