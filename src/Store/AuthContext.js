import React, { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    isLogin: (token) => { },
    logOut: () => { }
})

export const AuthContextProvider = props => {
    const [token, setToken] = useState('')
    const isLoggedIn = !!token;

    console.log(isLoggedIn)

    const loginHandler = token => {
        setToken(token)
    }

    const logOutHandler = token => {
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