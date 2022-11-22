import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = (props) => {
    const children = props.children;
    const [user, setUser] = useState(null);
    const [loading, setLoading ] = useState(true);
    // 1 createUserWithEmailAndPassword
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true);
    }

    // 2 signInWithEmailAndPassword
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        setLoading(true);
    }


    // 3 handleGoogleSignIn
    const signinWithPopUp = () => {
        return signInWithPopup(auth, googleProvider);
        setLoading(true);
    }
    

    // 4 updateProfile
    const changeProfile = profile => {
        return updateProfile(auth.currentUser, profile);
        setLoading(true);
    }

    // 5 signOut
    const logOut = () => {
        return signOut(auth);
        setLoading(true);
    }


    // 6 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            // console.log(currentUser)
          });

          return () => {
            unSubscribe()
          }
    }, [])

    // 7 sendPasswordResetEmail
    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email);
        setLoading(true);
    }


    // 8 sendEmailVerification
    const emailVarification = () => {
        return sendEmailVerification(auth.currentUser);
        setLoading(true);
    }

    const authInfo = {user, createUser, signIn, signinWithPopUp, changeProfile, resetPassword, logOut, emailVarification, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;