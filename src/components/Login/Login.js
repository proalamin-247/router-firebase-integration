import React from 'react';
import useFirebase from '../../hooks/useFirbase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    // const { signInWithGoogle} =useFirebase();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
                <button onClick={() => signInWithGoogle()}>Google</button>
            </div>
        </div>
    );
};

export default Login;