import DropDown from "./NavItem";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__container">
        <DropDown />
        <DropDown title="Sell" />
        <DropDown title="Rent" />
        <DropDown title="Mortgage" />
        <DropDown title="Find Realtors" />
        <DropDown title="My Home" />
        <DropDown title="News & Insights" />
      </ul>
    </nav>
  );
};

export default Nav;
