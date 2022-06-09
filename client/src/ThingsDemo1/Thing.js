import axios from "axios"
import { Link } from "react-router-dom"

const Thing = ({id, attr1, attr2, removeThingFromUIYo})=>{

    const deleteThing = async (id)=> {
       try{
           await axios.delete(`/api/things/${id}`) 
           removeThingFromUIYo(id)
       }catch(err){
             alert('error occured')
       }
    }
    return (
        <div className="component">
          <p>id:{id}</p>
          <p>attr1:{attr1}</p>
          <p>attr2:{attr2}</p>
          <button onClick={()=> deleteThing(id)}>delete</button>
          <Link to={`/things_demo1/edit/${id}`}>update</Link>
        </div>
    )
}
export default Thing