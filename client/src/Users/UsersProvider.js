import axios from "axios";
import React, { useEffect, useState } from "react";

export const UsersContext = React.createContext();

const UsersProvider = (props) => {
  let [users, setUsers] = useState([])  
  let [loggedInUser, setLoggedInUser] = useState(null)  

  useEffect(()=>{
      console.log('UsersProvider mounted: getUsers api called')
      getUsers()
      return ()=>{
        console.log('UsersProvider unmounted')
      }
  },[])

  // dummy login method
  const logInUser = async (id) => {
    try {
        let res = await axios.get(`/api/users/${id}`)
        setLoggedInUser(res.data)
      } catch (error) {
          alert('error occured logInUser')
      }
  }

  const logOutUser = async (id) => {
    setLoggedInUser(null)
  }

  const getUsers = async()=>{
      try {
        let res = await axios.get(`/api/users`)
        setUsers(res.data)
      } catch (error) {
          alert('error occured getUSERS')
      }
  }
  return (
    <UsersContext.Provider value={{ users, logInUser, logOutUser, loggedInUser }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider
