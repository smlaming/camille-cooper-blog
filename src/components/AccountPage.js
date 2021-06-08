import Header from "./header/Header"

import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import firebase from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import axios from "axios"

function AccountPage() {

    document.body.style = 'background:"white";';

    const history = useHistory();
    const { firstName, lastName, isLoggedIn, role, id, user, forceUserReload } = useContext(UserContext);



    const handleDelete = async () => {
        if (!window.confirm("Delete Your Account?")) return null;
        await user.delete()
        await axios.delete("http://localhost:8000/user/delete", { data: { user: user.uid } })
        window.location.reload();
        history.push("/")
    }

    if (!isLoggedIn) history.push("/login");
    return (
        <div>
            <Header />
            <h1>My Account</h1>
            <h2>
                Welcome, {firstName} {lastName}!
      </h2>
            <Button
                variant="contained"
                style={{ color: "#ff6961" }}
                onClick={() => {
                    firebase.auth().signOut();
                    window.location.reload();
                    history.push("/");
                }}
            >
                Log Out
      </Button>

            <br />
            <br />

            <Button
                variant="contained"
                style={{ backgroundColor: "#ff6961", color: "black" }}
                onClick={() => {
                    handleDelete()
                }}
            >
                Delete Account
      </Button>


        </div>
    );
}

export default AccountPage;