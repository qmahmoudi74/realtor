import AppButton from "../../components/AppButton";
import HeaderButton from "./HeaderButton";

const User = () => {
  return (
    <div className="user">
      <HeaderButton>Log in</HeaderButton>
      <HeaderButton>
        <AppButton>Sign Up</AppButton>
      </HeaderButton>
    </div>
  );
};

export default User;
