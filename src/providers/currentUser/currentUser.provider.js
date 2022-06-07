import React, { createContext } from "react";
import PropTypes from 'prop-types'

export const currentUser = createContext({ user: null, onUserLogOut: () => { }, onUserSignIn: () => { } });

const CurrentUserProvider = ({ children }) => {
    const [user, setUser] = React.useState(JSON.parse(sessionStorage.getItem('CURRENT_USER_SESSION')));

    const setLoggedUserInfo = (_currentUser) => {
        sessionStorage.setItem('CURRENT_USER_SESSION', JSON.stringify(_currentUser));
        const userFromStorage = JSON.parse(sessionStorage.getItem('CURRENT_USER_SESSION'))
        setUser(userFromStorage);
    }

    const setUserToNull = () => {
        sessionStorage.setItem('CURRENT_USER_SESSION', null);
        setUser(null);
    }

    return (
        <currentUser.Provider
            value={{
                user,
                onUserLogOut: setUserToNull,
                onUserSignIn: setLoggedUserInfo
            }}
        >
            {children}
        </currentUser.Provider>
    );
};

CurrentUserProvider.propTypes = {
    children: PropTypes.any
}

export default CurrentUserProvider;