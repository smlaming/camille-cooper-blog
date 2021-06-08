import React, { useState } from "react";
import firebase from "../firebase/firebase";
import { TextField, Button, Paper } from "@material-ui/core";
import { useHistory, NavLink } from "react-router-dom";
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
                setUser(user.user);
                history.push("/account");
                console.log("logged in as", user.user.email)
            })
            .catch((error) => {
                alert("Incorrect username or password");
                setPassword("");
            });
    };


    return (
        <div>

            <div >
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
                        Log In
        </Button>
                    <br />
                    <NavLink className="navbar-item" activeClassName="is-active" to="/signup">
                        Or Create An Account
            </NavLink>
                </form>
            </div>

        </div>
    );
};
export default LoginPage;
