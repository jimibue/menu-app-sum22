import axios from "axios"
import { useEffect, useState } from "react"
import Thing from "./Thing"

const Things = ()=>{
    // any list page on react (index get all stuff)
     // 1 create state 
     const [things, setThings] = useState(null)
     const [loading, setLoading] = useState(true)

     // 2. on mount do axios and grab data
     useEffect(()=>{
        getThings()
     },[])

     const getThings = async()=>{
        try{
          let res = await axios.get('/api/things')
          setLoading(false)
          setThings(res.data)
        }catch(err){
            alert('err')
            setLoading(false)
        }
     }
     // 3. render data to ui
     const renderThings = ()=>{
         if(loading){
             return <p>loading UI HERE</p>
         }

         return things.map(t=> <Thing key={t.id} {...t}/>)
     }
     
    
    return (
        <div className="component">
            <h1>Things</h1>
            {renderThings()}
        </div>
    )
}

export default Things