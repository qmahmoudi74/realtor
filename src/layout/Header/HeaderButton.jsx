const HeaderButton = ({ onHover, children }) => {
  return (
    <button
      onMouseLeave={onHover}
      onMouseEnter={onHover}
      className="header__button"
    >
      {children}
    </button>
  );
};

export default HeaderButton;
