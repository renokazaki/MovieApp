import { Link } from "react-router-dom";

import "./MyPage.css";
import { auth } from "../../lib/firebase";

export const MyPage = () => {
  //user情報を取得
  const user = auth.currentUser;
  const userQuely = user ? user.displayName : null; // ユーザーがログインしていない場合は null

  return (
    <>
      <div className="UserContainer">
        <div className="Usericon"></div>
        <div className="ContentList">
          <div className="top">{userQuely}</div>
          <div className="bottom">
            <Link to="/MyMovieLists">
              <button>投稿した動画一覧</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
