import {UserContext, UserProvider} from "./user-context";
import LoginRegister from "./LoginRegister";
import VotePage from "./VotePage";

export default function VoteApp() {

    return (
        <UserProvider>
            <UserContext.Consumer>
                {({user}) => {
                    if (!user) {
                        return <LoginRegister/>
                    } else {
                        return <VotePage/>
                    }
                }}
            </UserContext.Consumer>
        </UserProvider>
    )
}