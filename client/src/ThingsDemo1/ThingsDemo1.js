import { Link, Outlet } from "react-router-dom"

// Utilitize React Router
const ThingsDemo1 = ()=>{
    return (
        <div className="component">
            <div>
                <Link to='/things_demo1'>things</Link>
                <Link to='/things_demo1/new'>new thing</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default ThingsDemo1