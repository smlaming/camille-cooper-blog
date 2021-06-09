import React, { useState } from "react";
import firebase from "../firebase/firebase";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


const SignUpPage = () => {
    document.body.style = 'background:"white";';

    const history = useHistory();
    const { setUser, forceUserReload } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userName, setUserName] = useState();

    const createAccount = async (e) => {

        e.preventDefault();
        try {
            const userCredential = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            setUser(userCredential.user)
            const uid = userCredential.user.uid;
            const userEmail = userCredential.user.email;
            await axios.post("http://localhost:8000/user/signup", {
                uid,
                email: userEmail,
                firstName,
                lastName,
                userName,
            });
            forceUserReload(true);
            history.push("/");
        } catch (error) {
            if (error.code === "auth/invalid-email") {
                alert("Invalid Email");
            } else {
                alert("This Account already exists");
            }

            console.log(error);
        }

    };

    return (
        <div>

            <h1>Sign Up</h1>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "2%",

                }}
            >
                <TextField
                    type="text"
                    value={firstName}
                    onChange={({ target }) => setFirstName(target.value)}
                    placeholder="First Name"
                    style={{ width: "15em" }}
                />
                <br />
                <TextField
                    type="text"
                    value={lastName}
                    onChange={({ target }) => setLastName(target.value)}
                    placeholder="Last Name"
                    style={{ width: "15em" }}
                />
                <br />
                <TextField
                    type="text"
                    value={userName}
                    onChange={({ target }) => setUserName(target.value)}
                    placeholder="Username"
                    style={{ width: "15em" }}
                />
                <br />
                <TextField
                    type="text"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Email"
                    style={{ width: "15em" }}
                />
                <br />
                <TextField
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder="Password"
                    style={{ width: "15em" }}
                />

                <br />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ width: "12em", backgroundColor: "#2E3B55" }}
                    onClick={createAccount}
                >
                    Create Account
        </Button>
            </form>


        </div>
    );
};
export default SignUpPage;
