import { createContext, useState, useContext } from 'react';
//Y:Context é meio que só uma variavel que qualquer componente do site pode ler
//Y:(só precisa importa eles no app [eu acho???])

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // o !! serve pra: se getItem for string = true e se for NULL = false
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children} 
        </AuthContext.Provider>
    ); //Bro is going to pay pension to react after this one :sob:
};

export const useAuth = () => useContext(AuthContext);