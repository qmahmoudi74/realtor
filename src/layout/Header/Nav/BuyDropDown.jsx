const BuyDropDown = ({ items = [] }) => {
  return (
    <button>
      <p>Buy</p>

      <aside>
        {items.map(() => (
          <div key="asdasdasd">asdasdasd</div>
        ))}
      </aside>
    </button>
  );
};

export default BuyDropDown;
