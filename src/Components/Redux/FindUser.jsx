import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import app from '../Firebase.config.jsx';


export const ContextAPI = createContext(null)

const FindUser = ({children}) => {

    const auth = getAuth(app)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
        })
    }, [auth]);


    return <ContextAPI.Provider >
        {
            children
        }
    </ContextAPI.Provider>
};

export default FindUser;