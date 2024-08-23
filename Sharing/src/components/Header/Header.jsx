import { usePageTitle } from "../PageTitleContext";

import "./Header.css";

const Header = () => {
  const { pageTitle } = usePageTitle();

  return (
    <div className="Header">
      <div className="Title">{pageTitle}</div>
    </div>
  );
};

export default Header;
