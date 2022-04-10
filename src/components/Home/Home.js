import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirbase';
import Header from '../Header/Header';

const auth = getAuth(app);

const Home = () => {
    // const {user} = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>This is home</h1>
            <p>User Name: {user? user.displayName : 'login first'}</p>
        </div>
    );
};

export default Home;