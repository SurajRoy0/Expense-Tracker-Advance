import React, { useState } from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    isLogin: (token) => { },
    logOut: () => { },
    userName: "",
    addUserName: (Name) => { },
    isVerified: false,
    verificationHandler: (bool) => { },
});

export const AuthContextProvider = (props) => {
    const userAuthToken = JSON.parse(localStorage.getItem("Authdata"));
    const [Authdata, setAuthData] = useState(userAuthToken || {});
    const [token, setToken] = useState(Authdata.token || null);
    const [userName, setUserName] = useState(Authdata.userName || null);
    const [isVerified, setIsVerified] = useState(Authdata.isVerified || false);

    const isLoggedIn = !!token;

    const loginHandler = (token) => {
        const updatedAuthData = {
            ...Authdata,
            token: token,
            isVerified: isVerified,
        };
        setAuthData(updatedAuthData);
        localStorage.setItem("Authdata", JSON.stringify(updatedAuthData));
        setToken(token)
    };

    const logOutHandler = () => {
        localStorage.removeItem("Authdata");
        setAuthData({});
        setToken(null);
        setUserName(null);
        setIsVerified(false);
    };

    const userNameHandler = (name) => setUserName(name);
    const verificationHandler = (bool) => setIsVerified(bool);

    const contextValue = {
        token: token,
        isLoggedIn: isLoggedIn,
        isLogin: loginHandler,
        logOut: logOutHandler,
        userName: userName,
        addUserName: userNameHandler,
        isVerified: isVerified,
        verificationHandler: verificationHandler,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
