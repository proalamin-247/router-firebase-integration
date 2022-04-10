import React from 'react';
import useFirebase from '../../hooks/useFirbase';

const Login = () => {
    const { signInWithGoogle} =useFirebase();
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
                <button onClick={signInWithGoogle}>Google</button>
            </div>
        </div>
    );
};

export default Login;