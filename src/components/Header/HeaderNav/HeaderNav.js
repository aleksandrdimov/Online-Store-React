import "./HeaderNav.scss";

const HeaderNav = () => {
  return (
    <nav className="header__nav nav">
      <ul className="nav__list">
        <li className="nav__item js-active">Home</li>
        <li className="nav__item">smartphones</li>
        <li className="nav__item">laptops</li>
        <li className="nav__item">fragrances</li>
        <li className="nav__item">Contact</li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
