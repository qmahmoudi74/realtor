import { useState } from "react";
import HeaderButton from "../HeaderButton";
import NavDropDown from "./NavDropDown";

const BuyDropDown = ({ items = [1, 3] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderButton onHover={() => setIsOpen((s) => !s)}>
      <p>Buy</p>

      {isOpen && (
        <NavDropDown>
          {items.map(() => (
            <div key="asdasdasd">asdasdasd</div>
          ))}
        </NavDropDown>
      )}
    </HeaderButton>
  );
};

export default BuyDropDown;
