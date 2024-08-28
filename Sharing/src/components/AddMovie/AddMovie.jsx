import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../lib/firebase";

import "./AddMovie.css";

const AddMovie = () => {
  // 現在のユーザーを取得
  const user = auth.currentUser;
  const userQuely = user ? user.displayName : null; // ユーザーがログインしていない場合は null

  // 入力されたタイトル、説明、URL、カテゴリー、ファイルの状態を管理する
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  // カテゴリーのリスト
  const categories = ["YouTube", "NETFLIX", "その他"];

  // データを追加する関数
  const handleSubmit = async (e) => {
    e.preventDefault(); // フォームのデフォルトの送信を防止

    try {
      const docRef = await addDoc(collection(db, "Movie"), {
        UserId: userQuely,
        Title: title,
        Description: description,
        Url: url,
        Category: category,
        FileName: file ? file.name : "no file", // ファイル名を保存。ファイルがない場合は "no file"
      });
      console.log("Document written with ID: ", docRef.id);
      // 入力フィールドをリセット
      setTitle("");
      setDescription("");
      setUrl("");
      setCategory("");
      setFile(null);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <div className="FormContainer">
        <form className="form" onSubmit={handleSubmit}>
          <span className="form-title">Movie Information</span>

          <div className="input-group">
            <input
              placeholder="Title"
              required
              type="text"
              name="title"
              autoComplete="off"
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)} // 入力されたタイトルを更新
            />
          </div>

          <div className="input-group">
            <input
              placeholder="Description"
              required
              type="text"
              name="description"
              autoComplete="off"
              className="input description"
              value={description}
              onChange={(e) => setDescription(e.target.value)} // 入力された説明を更新
            />
          </div>

          <div className="input-group">
            <input
              placeholder="URL"
              required
              type="text"
              name="url"
              autoComplete="off"
              className="input"
              value={url}
              onChange={(e) => setUrl(e.target.value)} // 入力されたURLを更新
            />
          </div>

          <div className="input-group categoryContainer">
            <span>Category</span>
            {categories.map((cat) => (
              <div key={cat} className="category">
                <input
                  type="radio"
                  required
                  id={cat}
                  name="category"
                  value={cat}
                  checked={category === cat} // 現在選択されているカテゴリーを確認
                  onChange={(e) => setCategory(e.target.value)} // 選択されたカテゴリーを更新
                />
                <label htmlFor={cat}>{cat}</label>
              </div>
            ))}
          </div>

          <p className="form-paragraph">File should be an image</p>
          <label htmlFor="file-input" className="drop-container">
            <span className="drop-title">Drop files here</span>
            or
            <input
              type="file"
              accept="image/*"
              id="file-input"
              onChange={(e) => setFile(e.target.files[0])} // 選択されたファイルを更新
            />
          </label>

          <button className="SubmitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddMovie;
