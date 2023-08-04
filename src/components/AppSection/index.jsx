import { useMemo } from "react";

const AppSection = ({ children, isWide = true, className = "" }) => {
  const narrow = useMemo(() => (isWide ? "" : " narrow"), [isWide]);

  return (
    <section className={`app-section${narrow} ${className}`}>
      {children}
    </section>
  );
};

export default AppSection;
