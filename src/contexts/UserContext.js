import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [role, setRole] = useState("none");
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userName, setUserName] = useState();
    const [id, setID] = useState();
    const [transactions, setTransactions] = useState([])
    const [userReload, forceUserReload] = useState("false");
    useEffect(() => {
        if (!user) {
            setRole("none");

        } else {
            fetch("http://localhost:8000/user/login?uid=" + user.uid)
                .then((res) => res.json())
                .then((res) => {
                    setFirstName(res.firstName);
                    setLastName(res.lastName);
                    setID(res.uid);
                    setUserName(res.userName)
                    setTransactions(res.transactions)
                    forceUserReload(false);
                });
        }
    }, [user, userReload]);

    const isLoggedIn = user ? true : false;
    return (
        <UserContext.Provider
            value={{
                user,
                isLoggedIn,
                role,
                id,
                firstName,
                lastName,
                userName,
                transactions,
                forceUserReload,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContextProvider, UserContext };
