import Header from "./header/Header"
import TransactionCard from "./TransactionCard"
import { UserContext } from "../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, Card } from "@material-ui/core";
import firebase from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import blank from "./images/blank.png";
import axios from "axios"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        color: "#29335C"


    },
    body: {
        display: "flex",
        flexDirection: "row",
    },
    accountContainer: {
        display: "flex",
        flex: .8,
        flexDirection: "column",
        margin: 10,
        fontSize: 20,
        textAlign: "center",
        boxShadow: "1px 3px 1px #9E9E9E",
        backgroundColor: "#C4D5C4",
        marginLeft: 30



    },
    historyContainer: {
        display: "flex",
        flex: 1.5,
        flexDirection: "column",
        backgroundColor: "lightgray",
        boxShadow: "1px 3px 1px #9E9E9E",
        backgroundColor: "#C4D5C4",
        fontSize: 20,
        margin: 10,
        marginRight: 30

    },
    action: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        marginBottom: 10
    },
    info: {
        padding: 50,
        display: "flex",
        flexDirection: "column",


    },
    img: {
        width: "30%",
        height: "auto",
        alignSelf: "center"
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

    // this useEffect along with the storage and image as url states above can be used on other pages to retrieve images from storage
    useEffect(() => {
        if (user) {
            storage.ref('images').child(user.uid).getDownloadURL()
                .then(fireBaseUrl => {
                    setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                    //console.log(fireBaseUrl);
                })
            console.log("here")
        }
    }, []);

    //this useEffect is only needed for inital uploading of photo
    useEffect(() => {
        if (user && imageAsFile) {
            handleFireBaseUpload()
        }
    }, [imageAsFile]);

    const handleDelete = async () => {
        if (!window.confirm("Delete Your Account?")) return null;
        await user.delete()
        await axios.delete("http://localhost:8000/user/delete", { data: { user: user.uid } })
        window.location.reload();
        history.push("/")
    }
    const handleImageAsFile = (e) => {
        e.preventDefault()
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }
    // credit: https://dev.to/itnext/how-to-do-image-upload-with-firebase-in-react-cpj
    const handleFireBaseUpload = e => {
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
                    <h2 style={{ textAlign: "center" }}>Account Info</h2>
                    <div className={classes.info}>


                        {imageAsUrl.imgUrl != "" ? <img className={classes.img} src={imageAsUrl.imgUrl} alt="image tag" /> : <img className={classes.img} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"} alt="image tag" />}<br />
                        <input
                            type="file"
                            onChange={handleImageAsFile}
                            style={{ alignSelf: "center" }}
                        />


                        <br />
                        <div style={{ textAlign: "left", paddingLeft: 20 }}>
                            First Name: {firstName} <br />
                            Last Name : {lastName} <br />
                            Username: {userName} <br />
                            Email: {email} <br />
                        </div>


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
                    <h2>Purchase History</h2>
                    {
                        transactions ? <div>{
                            transactions.map((t) => {
                                return (
                                    <TransactionCard name={t.name} date={t.date} price={t.price} />
                                )
                            })}
                        </div>
                            : <div>  You have no purchases! </div>

                    }

                </div>
            </div>


        </div >
    );
}

export default AccountPage;