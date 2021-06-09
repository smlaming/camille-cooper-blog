import Header from "./header/Header"
import TransactionCard from "./TransactionCard"
import { UserContext } from "../contexts/UserContext";
import { useContext, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, Card } from "@material-ui/core";
import firebase from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import axios from "axios"
import { getStorage, ref } from "firebase/storage";

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
    const storage = firebase.storage()
    document.body.style = 'background:"white";';
    const allInputs = { imgUrl: '' }
    const history = useHistory();
    const { firstName, lastName, userName, isLoggedIn, user, shippingAddress, email, transactions } = useContext(UserContext);
    const classes = useStyles();
    const [imageAsFile, setImageAsFile] = useState()
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)


    const handleDelete = async () => {
        if (!window.confirm("Delete Your Account?")) return null;
        await user.delete()
        await axios.delete("http://localhost:8000/user/delete", { data: { user: user.uid } })
        window.location.reload();
        history.push("/")
    }
    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }
    const handleFireBaseUpload = e => {
        e.preventDefault()
        console.log('start of upload')
        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
        }
        const uploadTask = storage.ref(`/images/${user.uid}`).put(imageAsFile)
        //initiates the firebase side uploading 
        uploadTask.on('state_changed',
            (snapShot) => {
                console.log(snapShot)
            }, (err) => {
                //catches the errors
                console.log(err)
            }, () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:
                storage.ref('images').child(user.uid).getDownloadURL()
                    .then(fireBaseUrl => {
                        setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                    })
            })
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
                        <form onSubmit={handleFireBaseUpload}>
                            <input
                                type="file"
                                onChange={handleImageAsFile}
                            />
                            <button>upload to firebase</button>
                        </form>
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