import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import firebase from "../firebase/firebase";
import { Button } from "@material-ui/core";

export default function HomePage() {
    const { firstName, isLoggedIn } = useContext(UserContext);
    if (isLoggedIn) {
        return (
        <div style={{ paddingTop: "22%" }}>
            <br /> Hello <i>{firstName}</i>
            <br /> <br />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "12em", backgroundColor: "#2E3B55" }}
                onClick={() => {
                    firebase.auth().signOut();
                    window.location.reload(); // refresh page
                }}
            >
                Sign Out
        </Button>
        </div>)
    }

    return (<div  style={{ paddingTop: "22%" }}> <br />
        Hello! You are not logged in. <br /> <br />
        <Button variant="contained" color="primary" href="/login">Log In</Button> <br /> <br />
        <Button variant="contained" color="secondary" href="/signup">Sign Up</Button>
        </div>)
}

