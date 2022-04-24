import { useEffect, useState } from "react"
import axios from "axios"

export const Showemploy = ()=>{
    const [data,setData] = useState([]);
    useEffect (()=>{
        axios.get("https://reqres.in/api/users?page=2").then(({data})=>{
            setData(data.data)
        })
    },[])

    return (
        <div>
            {data.map((d)=>(
                <p>{d.id}.{d.first_name}</p>
            ))}
        </div>
    )
}