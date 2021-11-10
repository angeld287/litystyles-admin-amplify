import { createContext } from "react";

const currentUser = createContext({user: null, onUserLogOut: () => {}, onUserSignIn: () => {}});

export default currentUser;