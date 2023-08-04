import { createPortal } from "react-dom";
{
  /* <div className="nav__drop-down">{ children}</div> */
}
const NavDropDown = ({ children }) => {
  return createPortal(
    <div className="nav__drop-down">{children}</div>,
    document.getElementById("nav__container")
  );
};

export default NavDropDown;
