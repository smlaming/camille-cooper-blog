import Header from "./header/Header"
import TransactionCard from "./TransactionCard"
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, Card } from "@material-ui/core";
import firebase from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import axios from "axios"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",

    },
    body: {
        display: "flex",
        flexDirection: "row",
    },
    accountContainer: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        margin: 10,
        padding: 10,
        fontSize: 20,
        textAlign: "left",
        boxShadow: "1px 3px 1px #9E9E9E",
        backgroundColor: "lightgray"

    },
    historyContainer: {
        display: "flex",
        flex: 1.5,
        flexDirection: "column",
        backgroundColor: "lightgray",
        boxShadow: "1px 3px 1px #9E9E9E",
        backgroundColor: "lightgray"
    },
    action: {
        display: "flex",
        flexDirection: "row",
        flex: 1
    },
    info: {
        padding: 50,
        display: "flex",
        flexDirection: "column"
    }

}));
function AccountPage() {

    document.body.style = 'background:"white";';

    const history = useHistory();
    const { firstName, lastName, userName, isLoggedIn, user, shippingAddress, email, transactions } = useContext(UserContext);
    const classes = useStyles();


    const handleDelete = async () => {
        if (!window.confirm("Delete Your Account?")) return null;
        await user.delete()
        await axios.delete("http://localhost:8000/user/delete", { data: { user: user.uid } })
        window.location.reload();
        history.push("/")
    }

    if (!isLoggedIn || !user) history.push("/login");
    return (
        <div className={classes.root}>
            <Header />
            <h1>My Account</h1>
            <h2>
                Welcome, {firstName} {lastName}!
      </h2>


            <div className={classes.body}>
                <div className={classes.accountContainer}>
                    <div className={classes.info}>
                        First Name: {firstName} <br />
                        Last Name : {lastName} <br />
                        Username: {userName} <br />
                         Email: {email} <br />



                    </div>
                    <div classes={classes.action}>
                        <Button
                            variant="contained"
                            style={{ color: "#ff6961", maxWidth: "20%", marginRight: 17 }}
                            onClick={() => {
                                firebase.auth().signOut();
                                window.location.reload();
                                history.push("/");
                            }}
                        >
                            Log Out
                         </Button>

                        <Button
                            variant="contained"
                            style={{ backgroundColor: "#ff6961", color: "black", maxWidth: "20%", fontSize: 11 }}
                            onClick={() => {
                                handleDelete()
                            }}
                        >
                            Delete Account
                             </Button>
                    </div>
                </div>
                <div className={classes.historyContainer}>
                    <h2>Transaction History</h2>
                    {
                        transactions && <div>{
                            transactions.map((t) => {
                                return (
                                    <TransactionCard name={t.name} date={t.date} price={t.price} />
                                )
                            })}
                        </div>

                    }

                </div>
            </div>


        </div>
    );
}

export default AccountPage;