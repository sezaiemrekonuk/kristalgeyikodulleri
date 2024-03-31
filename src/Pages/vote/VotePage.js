import {signOut} from 'firebase/auth';
import {auth} from "../../firebaseConfig";
import {useContext} from "react";
import {UserContext} from "./user-context";

export default function VotePage() {
    const userContext = useContext(UserContext);
    const signOutUser = () => {
        signOut(auth).then(() => {
            console.log("signout successful");
            userContext.setUser(null);
        }).catch((error) => {
            console.log("signout error", error);
        });
    }

    console.log(userContext.user);

    return (
        <div>
            <h1>Vote Page</h1>
            <button
            onClick={signOutUser}
            >signout</button>
        </div>
    )
}