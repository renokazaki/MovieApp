import { Link } from "react-router-dom";

// Font AwesomeのReactコンポーネントとアイコンをインポート
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="ButtonContainer">
        <Link to="/UserLists">
          <FontAwesomeIcon className="Icon HouseIcon" icon={faHouse} />
        </Link>
        <Link to="/AddMovie">
          <FontAwesomeIcon className="Icon PlusIcon" icon={faSquarePlus} />
        </Link>
        <Link to="/TimeLine">
          <FontAwesomeIcon className="Icon BellIcon" icon={faBell} />
        </Link>

        <Link to="/MyPage">
          <FontAwesomeIcon className="Icon UserIcon" icon={faUser} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
