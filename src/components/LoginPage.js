import React, { useState } from "react";
import firebase from "../firebase/firebase";
import { TextField, Button, Paper , Box} from "@material-ui/core";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from "@material-ui/core/Link"
const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: "#c4d5c4",
      color: "#2f2c7a",
      height: 50,
      width: "27em",
      fontWeight: "bold",
      marginTop: 30,
      fontSize: 22,
  },
  darkblue: {
    color: "#2f2c7a",
    fontFamily: 'Playfair Display',
    fontSize: 55,
    fontWeight: "bold",
    paddingBottom: 10,
}
  }));

const LoginPage = () => {
    document.body.style = 'background:"grey";';

    const classes = useStyles();
    const history = useHistory();
    const { setUser, forceUserReload } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

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

            <div>
          
                <h1 className={classes.darkblue}>Login</h1>
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
                        variant="outlined"
                        onChange={({ target }) => setEmail(target.value)}
                        placeholder="Email"
                        style={{ width: "37em" }}
                    />
                    <br />
                    <TextField
                        type="password"
                        value={password}
                        variant="outlined"
                        onChange={({ target }) => setPassword(target.value)}
                        placeholder="Password"
                        style={{ width: "37em" }}
                    />

                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={logIn}
                        className={classes.button}
                        style={{marginBottom:10}}
                    >
                        SIgn in
                    </Button>
                    <br />
                    <Link style={{fontFamily: "inter", color: "#2f2c7a", paddingBottom: 40}} href="/sign_up">
                        Don't have an account? Create one.
            </Link>
                </form>
            </div>
            <img style={{width: 1100, float: "left", paddingRight:1}} src="https://secure.img1-ag.wfcdn.com/im/56274461/resize-h800%5Ecompr-r85/1096/109639462/Sia+2+-+Person+Seating+Group+with+Cushions.jpg"></img>
        </div>
    );
};
export default LoginPage;
