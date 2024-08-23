import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="ButtonContainer">
        <Link to="/UserLists">
          <button>友達一覧</button>
        </Link>
        <Link to="/MyPage">
          <button>MyPage</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
