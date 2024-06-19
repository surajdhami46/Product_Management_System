import { createContext, useEffect, useState } from "react";



const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [userList, setUserList] = useState(() => {
        const savedData = localStorage.getItem('data');
        return savedData ? JSON.parse(savedData) : [{
            name: 'admin',
            email: 'admin@gmail.com',
            password: 'admin',
            role: 'ADMIN'
        }];
    });



    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(userList));
    }, [userList]);

    return (
        <AuthContext.Provider value={{ userList, setUserList }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };