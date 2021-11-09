import { createContext } from "react";

const currentUserContext = createContext({logged: false, toggleLogged: () => {}});

export default currentUserContext;