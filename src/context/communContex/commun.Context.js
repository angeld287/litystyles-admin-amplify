import { createContext } from "react";

const communContext = createContext({ error: null, setError: () => { } });

export default communContext;