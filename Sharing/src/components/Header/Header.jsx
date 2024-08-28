import { LogOut } from "../LogOut/LogOut";
import { usePageTitle } from "../PageTitleContext";

import "./Header.css";

const Header = () => {
  const { pageTitle } = usePageTitle();

  return (
    <div className="Header">
      <div className="Title">{pageTitle}</div>
      <LogOut />
    </div>
  );
};

export default Header;
