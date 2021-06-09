import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isAdmin, setIsAdmin] = useState(false);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userName, setUserName] = useState();
    const [photo, setPhoto] = useState();
    const [id, setID] = useState();
    const [transactions, setTransactions] = useState([])
    const [shippingAddress, setShippingAddress] = useState(null)
    const [email, setEmail] = useState();
    const [userReload, forceUserReload] = useState("false");
    useEffect(() => {
        if (user) {

            fetch("http://localhost:8000/user/login?uid=" + user.uid)
                .then((res) => res.json())
                .then((res) => {
                    setFirstName(res.firstName);
                    setLastName(res.lastName);
                    setID(res.uid);
                    setUserName(res.userName)
                    setTransactions(res.transactions)
                    forceUserReload(false);
                    setPhoto(res.photo)
                    setIsAdmin(res.admin)
                    setEmail(user.email)

                });
        }
    }, [user, userReload]);

    const isLoggedIn = user ? true : false;
    return (
        <UserContext.Provider
            value={{
                user,
                isLoggedIn,
                isAdmin,
                id,
                firstName,
                lastName,
                userName,
                transactions,
                shippingAddress,
                email,
                forceUserReload,
                setUser,
                photo
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContextProvider, UserContext };
