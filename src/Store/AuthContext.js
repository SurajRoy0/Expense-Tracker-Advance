import React, { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    isLogin: (token) => { },
    logOut: () => { }
})

export const AuthContextProvider = props => {
    const userAuth = localStorage.getItem('token');
    const [token, setToken] = useState(userAuth)
    const isLoggedIn = !!token;

    console.log(isLoggedIn)

    const loginHandler = token => {
        localStorage.setItem('token', token);
        setToken(token)
    }

    const logOutHandler = () => {
        localStorage.removeItem('token');
        setToken('')
    }


    const contextValue = {
        token: token,
        isLoggedIn: isLoggedIn,
        isLogin: loginHandler,
        logOut: logOutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;