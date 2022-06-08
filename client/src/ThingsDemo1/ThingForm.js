import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const ThingsForm = ()=>{
    const [attr1, setAttr1] = useState('')
    const [attr2, setAttr2] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(id){
            getThing()
        }
    },[])

    const getThing = async()=>{
        try {
            let res = await axios.get(`/api/things/${id}`)
            setAttr1(res.data.attr1)
            setAttr2(res.data.attr2)
        } catch (error) {
            console.log('err')
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(id){
            console.log('update axios stuff')
            console.log({attr1,attr2, id})
            // happen after you update thing to db
            navigate('/things_demo1')

        } else{
            console.log('create axios stuff')
            console.log({attr1,attr2})
            // happen after you add thing to db
            navigate('/things_demo1')
        }

    }
    return (
        <div className="component">
            <h1>{id ? "Edit" :"New"} Thing</h1>
            <form onSubmit={handleSubmit}>
                <p>attr1</p>
                <input value={attr1} onChange={(e)=> setAttr1(e.target.value)} />
                <p>attr2</p>
                <input value={attr2} onChange={(e)=> setAttr2(e.target.value)} />
                <button> {id ? "update" :"create"}</button>
            </form>
        </div>
    )
}

export default ThingsForm