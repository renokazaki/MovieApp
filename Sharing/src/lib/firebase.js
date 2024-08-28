import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // 修正


// Firebase の設定
const firebaseConfig = {
    apiKey: "AIzaSyD7BEm5DJLSQPSkXWyfIghA9DyEKKH_SyM",
    authDomain: "sharemoviedemo.firebaseapp.com",
    projectId: "sharemoviedemo",
    storageBucket: "sharemoviedemo.appspot.com",
    messagingSenderId: "705461894075",
    appId: "1:705461894075:web:2457870dedf178700ea29e"
  };

// Firebase の初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { auth, db ,storage};
