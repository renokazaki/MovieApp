import React from "react"; // Reactをインポート

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { PageTitleProvider, usePageTitle } from "./components/PageTitleContext";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UserLists from "./components/UserLists/UserLists";
import MovieLists from "./components/MovieLists/MovieLists";
import { MyPage } from "./components/MyPage/MyPage";

const TitleUpdater = () => {
  const { pathname } = useLocation();
  const { setPageTitle } = usePageTitle();

  React.useEffect(() => {
    switch (pathname) {
      case "/UserLists":
        setPageTitle("友達一覧");
        break;
      case "/MovieLists":
        setPageTitle("動画一覧");
        break;
      case "/MyPage":
        setPageTitle("MyPage");
        break;
      default:
        setPageTitle("ページ未設定");
    }
  }, [pathname, setPageTitle]);
  return null;
};

function App() {
  return (
    <Router>
      <PageTitleProvider>
        <div className="HeaderContainer">
          <Header />
        </div>
        <TitleUpdater />

        {/* Routesでルーティングを設定 */}
        <div className="ContentContainer">
          <Routes>
            <Route path="/UserLists" element={<UserLists />} />
            <Route path="/Movielists" element={<MovieLists />} />
            <Route path="/MyPage" element={<MyPage />} />
          </Routes>
        </div>
        <div className="FooterContainer">
          <Footer />
        </div>
      </PageTitleProvider>
    </Router>
  );
}

export default App;
