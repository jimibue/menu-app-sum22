// setup page in react router

import { useContext } from "react"
import { UsersContext } from "./UsersProvider"


const Users = ()=>{
    let x = useContext(UsersContext)
    return (
        <div className='component'>
           <h1>Users</h1>
           <p>let x = useContext(UsersContext)... x is: {JSON.stringify(x)}</p>
        </div>
    )
}

export default Users