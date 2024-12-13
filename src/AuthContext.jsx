import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        // Sayfa yüklendiğinde localStorage'dan oturum durumunu al
        return localStorage.getItem("isLoggedIn") === "true";
    });

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true"); // Oturum durumunu localStorage'a kaydet
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:8080/logout', {}, {
                withCredentials: true,
            });
            setIsLoggedIn(false);
            localStorage.setItem("isLoggedIn", "false"); // Oturum durumunu sıfırla
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
