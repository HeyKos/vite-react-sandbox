import React, { useEffect, useState } from "react";
import firebase from "firebase-init";

type ContextProps = {
    user: firebase.User | null;
    authenticated: boolean;
    setUser: React.Dispatch<React.SetStateAction<firebase.User | null>>;
    loadingAuthState: boolean;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider: React.FC = ({ children }: any) => {
    const [user, setUser] = useState(null as firebase.User | null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);
    const providerContextProps = {
        user,
        authenticated: user !== null,
        setUser,
        loadingAuthState,
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
            setUser(user);
            setLoadingAuthState(false);
        });
    }, []);

    return (
        <AuthContext.Provider value={providerContextProps}>
            {children}
        </AuthContext.Provider>
    );
};
