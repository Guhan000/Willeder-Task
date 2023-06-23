import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAFUVhMZ2Ui3MAZTVWHus2w_6QPxhTQ_gg",
  authDomain: "willeder-task.firebaseapp.com",
  projectId: "willeder-task",
  storageBucket: "willeder-task.appspot.com",
  messagingSenderId: "278882754088",
  appId: "1:278882754088:web:7e7037253a68f6d9499f1d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;