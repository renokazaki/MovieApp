import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { PageTitleProvider, usePageTitle } from "./components/PageTitleContext";

import "./Reset.css";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UserLists from "./components/UserLists/UserLists";
import MovieLists from "./components/MovieLists/MovieLists";
import { MyPage } from "./components/MyPage/MyPage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import AddMovie from "./components/AddMovie/AddMovie";
import { TimeLine } from "./components/TimeLine/TimeLine";
import MyMovieLists from "./components/MyPage/MyMovieLists/MyMovieLists";

// Firebase関連のインポート
import useAuth from "./lib/useAuth"; // Firebase認証状態を監視するカスタムフック

const TitleUpdater = () => {
  const { pathname } = useLocation();
  const { setPageTitle } = usePageTitle();

  React.useEffect(() => {
    switch (pathname) {
      case "/UserLists":
      case "/": // "/" の場合も "友達一覧" に設定
        setPageTitle("友達一覧");
        break;
      case "/MovieLists":
        setPageTitle("動画一覧");
        break;
      case "/AddMovie":
        setPageTitle("動画追加");
        break;
      case "/MyPage":
        setPageTitle("MyPage");
        break;
      case "/MyMovieLists":
        setPageTitle("MyMovieLists");
        break;
      case "/TimeLine":
        setPageTitle("TimeLine");
        break;
      default:
        setPageTitle("ページ未設定");
    }
  }, [pathname, setPageTitle]);

  return null;
};

function App() {
  const { user, loading } = useAuth();

  // ローディング中は表示を制御する
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <PageTitleProvider>
        {user ? ( // ユーザーがログインしているかどうかでコンテンツを切り替え
          <>
            <div className="HeaderContainer">
              <Header />
            </div>
            <TitleUpdater />

            {/* Routesでルーティングを設定 */}
            <div className="ContentContainer">
              <Routes>
                <Route path="/" element={<UserLists />} />
                <Route path="/UserLists" element={<UserLists />} />
                <Route path="/Movielists" element={<MovieLists />} />
                <Route path="/AddMovie" element={<AddMovie />} />
                <Route path="/TimeLine" element={<TimeLine />} />
                <Route path="/MyPage" element={<MyPage />} />
                <Route path="/MyMovieLists" element={<MyMovieLists />} />
              </Routes>
            </div>
            <div className="FooterContainer">
              <Footer />
            </div>
          </>
        ) : (
          // ログインが必要な場合はログイン画面とサインアップ画面を表示
          <>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
          </>
        )}
      </PageTitleProvider>
    </Router>
  );
}

export default App;
