import React, { useState } from "react";
import firebase from "../firebase/firebase";
import { TextField, Button, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


const LoginPage = () => {
    document.body.style = 'background:"white";';

    const history = useHistory();
    const { setUser, forceUserReload } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = (e) => {
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                setUser(user);
                history.push("/");
            })
            .catch((error) => {
                alert("Incorrect username or password");
                setPassword("");
            });
    };

    const createAccount = async (e) => {
        e.preventDefault();




        e.preventDefault();
        try {
            const userCredential = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            const uid = userCredential.user.uid;
            const userEmail = userCredential.user.email;
            await axios.post("/users", {
                uid,
                email: userEmail,
            });
            forceUserReload(true);
            history.push("/");
        } catch (error) {
            if (error.code === "auth/invalid-email") {
                alert("Invalid Email");
            } else {
                alert("An Error Occured");
            }

            console.log(error);
        }

    };

    return (
        <div>

            <div style={{ paddingTop: "5%" }}>
                <h1>Login</h1>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "2%",
                        margin: "auto",
                    }}
                >
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
                        style={{ width: "7em", backgroundColor: "#2E3B55" }}
                        onClick={logIn}
                    >
                        Log in
        </Button>
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

        </div>
    );
};
export default LoginPage;
