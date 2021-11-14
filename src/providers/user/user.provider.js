import { createContext } from "react";

export const currentUser = createContext({ user: null, onUserLogOut: () => { }, onUserSignIn: () => { } });

export default currentUser;