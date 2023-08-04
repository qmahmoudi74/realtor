import Actions from "./Actions";
import "./Header.css";
import Logo from "./Logo";
import Nav from "./Nav";
import User from "./User";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Nav />
        <Actions />
        <User />
      </div>
    </header>
  );
};

export default Header;
