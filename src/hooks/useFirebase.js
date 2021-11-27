import initializeFirebaseApp from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
initializeFirebaseApp();

const useFirebase = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, provider)

  };


  // const signInUsingGoogle = () => {
  //   setIsLoading(true);
  //   const googleProvider = new GoogleAuthProvider();

  //   signInWithPopup(auth, googleProvider)
  //     .then(result => {
  //       setUser(result.user);
  //     })
  //     .finally(() => setIsLoading(false));
  // }

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setError("");
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [])

  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser({});
  //     })
  //     .catch((error) => {
  //       setError("");
  //     });
  // };

  // const logOut = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser({})
  //     })
  // }

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  }

  return { signInUsingGoogle, isLoading, user, error, logOut };
};
export default useFirebase;
