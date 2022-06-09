import { useContext } from "react";
import { UsersContext } from "./Users/UsersProvider";

const Home = () =>{
    const { loggedInUser, logInUser, logOutUser, users } = useContext(UsersContext);
    return (
        <div className="component">
            <h1>Home</h1>
            {loggedInUser ? loggedInUser.username: 'you are not signed in'}
            <p>{JSON.stringify(users)}</p>
        </div>
    )
}
export default Home