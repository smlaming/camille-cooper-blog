import React, { useState } from "react";
import firebase from "../firebase/firebase";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
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
        fontSize: 21,
    },
    darkblue: {
      color: "#2f2c7a",
      fontFamily: 'Playfair Display',
      fontSize: 55,
      fontWeight: "bold",
      paddingBottom: 10,
  }
  }));

const SignUpPage = () => {
    document.body.style = 'background:"white";';
    const classes = useStyles();
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
        <div style={{float: "right", marginRight: "210px", marginTop:"180px"}}>

            <h1 className={classes.darkblue}>Sign Up</h1>
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
                    variant="outlined"
                    onChange={({ target }) => setFirstName(target.value)}
                    placeholder="First Name"
                    style={{ width: "35em" }}
                />
                <br />
                <TextField
                    type="text"
                    value={lastName}
                    variant="outlined"
                    onChange={({ target }) => setLastName(target.value)}
                    placeholder="Last Name"
                    style={{ width: "35em" }}
                />
                <br />
                <TextField
                    type="text"
                    value={userName}
                    variant="outlined"
                    onChange={({ target }) => setUserName(target.value)}
                    placeholder="Username"
                    style={{ width: "35em" }}
                />
                <br />
                <TextField
                    type="text"
                    value={email}
                    variant="outlined"
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Email"
                    style={{ width: "35em" }}
                />
                <br />
                <TextField
                    type="password"
                    value={password}
                    variant="outlined"
                    onChange={({ target }) => setPassword(target.value)}
                    placeholder="Password"
                    style={{ width: "35em" }}
                />

                <br />

                <Button
                    type="submit"
                    variant="contained"
                    className={classes.button}
                    onClick={createAccount}
                    style={{marginBottom: 20}}
                >
                    Create Account
        </Button>
        <Link style={{fontFamily: "inter", color: "#2f2c7a", paddingBottom: 40}} href="/login">
                        Already have an account? Sign in.
            </Link>
            </form>
        </div>
        <img style={{width: 1100, float: "left", paddingLeft:1}} src="https://i.pinimg.com/originals/88/19/59/8819592807f0c46ee14cfc1688e96958.jpg"></img>
        </div>
    );
};
export default SignUpPage;
