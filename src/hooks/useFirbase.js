import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init'

const auth = getAuth(app);
const gooleProvider = new GoogleAuthProvider();
const useFirebase = ()=>{
    const [user, setUser] = useState({});

    const signInWithGoogle=()=>{
        signInWithPopup(auth, gooleProvider)
        .then(res =>{
            const user = res.user;
            setUser(user);
            console.log(user);
        })
    }
    const handleSignOut =()=>{
        signOut(auth)
        .then(()=>{

        })

    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

    }, [])

    return { user, signInWithGoogle, handleSignOut}
}

export default useFirebase;