import { createContext, useEffect, useState, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    confirmPasswordReset
} from "firebase/auth";

import { auth } from "../firebase.js";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState({});

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut(){
        return signOut(auth);
    }

    function googleSignIn(){
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    function forgetPassword(email){
        return sendPasswordResetEmail(auth, email, {
            url: 'http://localhost:5173'
        });
    }

    function resetPassword(oobCode, newPassword){
        return confirmPasswordReset(auth, oobCode, newPassword);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <userAuthContext.Provider
            value={{user, signUp, logIn, logOut, googleSignIn, forgetPassword, resetPassword}}
        >
            { children }
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext)
}