import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, image) => {
        setLoading(false)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    const logOut = () => {
        setLoading(false)
        return signOut(auth)
    }
    const signIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInGoogle = () => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }
    const signInGithub = () => {
        setLoading(false)
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        setLoading(false)
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])
    return (
        <div>
            <AuthContext.Provider value={{ loading, createUser, updateUserProfile, user, logOut, signIn, signInGoogle, signInGithub }}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;