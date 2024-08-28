import "./MyMovieLists.css";
import { useEffect, useState } from "react";
import { db, auth } from "../../../lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Loading } from "../../Loading/Loading";

const MyMovieLists = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //user情報を取得
  const user = auth.currentUser;
  const userName = user ? user.displayName : null; // ユーザーがログインしていない場合は null

  console.log("User Display Name:", userName);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // データ取得中の状態にする
      try {
        const q = query(
          collection(db, "Movie"),
          where("UserId", "==", userName)
        );

        const querySnapshot = await getDocs(q);
        const moviesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMovies(moviesList);
      } catch (error) {
        setError("Error fetching movies: " + error.message);
      } finally {
        setLoading(false); // データ取得完了の状態にする
      }
    };

    fetchMovies();
  }, []); // userDisplayName に依存せず、全ての動画を取得する

  if (loading)
    return (
      <div className="LoadingContainer">
        <Loading />
      </div>
    );
  if (error) return <div className="Error">Error: {error}</div>;

  return (
    <div className="MovieListContainer">
      {movies.length === 0 ? (
        <p className="CenteredContainer ">動画が登録されていません。</p>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="card">
            <img src={movie.Url} alt={movie.Title} />
            <div className="card__content">
              <p className="card__title">{movie.Title}</p>
              <div className="DetailContainer">
                <a
                  href={movie.Url} // 動画の URL を動的に設定
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="MoreDetail">詳細</button>
                </a>
              </div>
              <p className="card__description">{movie.Description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyMovieLists;
