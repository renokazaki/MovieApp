import "./UserInfo.css";

const UserInfo = () => {
  return (
    <div className="UserInfoContaier">
      <div className="voice-chat-card">
        <div className="UserInfo">
          <img className="avatar" />
          <div className="username">User nameが投稿しました。</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
