import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";

export const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("Logged out successfully");
      // ログアウト後にリダイレクトする
      navigate("/"); // または、"/"（ログインページ）などの適切なパスにリダイレクト
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};
