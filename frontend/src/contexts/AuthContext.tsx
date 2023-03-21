import { createContext, ReactNode, useState } from "react";

type UserProps = {
    id: string;
    name: string;
    email: string;
}


type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthContextDataProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthContextDataProps) {

    const [user, setUser] = useState<UserProps>()

    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInProps) {
        console.log('dados para logar ', email)
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}