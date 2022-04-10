import React from 'react';
import useFirebase from '../../hooks/useFirbase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    // const { signInWithGoogle} =useFirebase();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handaleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(() =>{
            navigate(from, {replace: true})
        })
    }

    return (
        <div>
            <h3>Please Register!!</h3>
            <form action="">
                <input type="email" placeholder='your email' />
                <br />
                <input type="password" placeholder='your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
            <h4>Or</h4>
            {/* <br /> */}
            <div>
                <button onClick={handaleGoogleSignIn}>Google</button>
            </div>
        </div>
    );
};

export default Login;