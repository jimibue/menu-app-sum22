import { Link, Outlet } from "react-router-dom"

const PageWrapper = ()=>{
    return (
        <div className="app-container">
            <div className="navbar">
               <Link to='/'>Home</Link>
               <Link to='/dishes'>Dishes</Link>
               <Link to='/things_demo1'>Things Demo1</Link>
            </div>
            <div className="app-body">
                <Outlet />
            </div>
        </div>
    )
}

export default PageWrapper