import HeaderCart from "./HeaderCart/HeaderCart";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import Search from "../common/Search/Search";
import SelectCurrency from "../common/Selects/SelectCurrency";
import SelectLanguage from "../common/Selects/SelectLanguage";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__box">
          <div className="header__select select">
            <SelectLanguage />
            <SelectCurrency />
          </div>
          <div className="header__content">
            <HeaderProfile />
            <HeaderCart />
            <Search />
          </div>
        </div>
        <div className="header__container">
          <HeaderLogo />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
