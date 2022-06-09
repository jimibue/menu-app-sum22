import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UsersContext } from "./Users/UsersProvider";

const PageWrapper = () => {
  const { loggedInUser, logInUser, logOutUser } = useContext(UsersContext);
  const renderRightNav = () => {
    if (loggedInUser) {
      return (
        <>
          <p>{loggedInUser.username}</p>
          <button onClick={logOutUser}>logout</button>
        </>
      );
    } else {
      return <button onClick={() => logInUser(4)}>login user id 4</button>;
    }
  };
  return (
    <div className="app-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/dishes">Dishes</Link>
        <Link to="/things_demo1">Things Demo1</Link>
        <Link to="/users">Users</Link>
        <div>{renderRightNav()}</div>
      </div>
      <div className="app-body">
        <Outlet />
      </div>
    </div>
  );
};

export default PageWrapper;
