import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import firebase from "../firebase/firebase";
import { Button } from "@material-ui/core";

export default function HomePage() {
    const { firstName, isLoggedIn } = useContext(UserContext);
    if (isLoggedIn) {
        return (<div>
            hello {firstName}
            <br />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ width: "12em", backgroundColor: "#2E3B55" }}
                onClick={() => {
                    firebase.auth().signOut();
                    window.location.reload();//refresh page
                }}
            >
                sign out
        </Button>
        </div>)
    }

    return (<div> Hello! you are not logged in</div>)
}