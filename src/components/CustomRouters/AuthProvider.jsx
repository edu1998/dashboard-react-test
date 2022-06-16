import React, { useState } from "react";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
    let [authData, setAuthData] = useState(null); // example { authStatus: true, rol: ['ADMIN']}

    return <AuthContext.Provider value={{authData, setAuthData}}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
    return React.useContext(AuthContext);
}
