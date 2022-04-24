import axios from "axios";
import { useState } from "react"

export const Addemploy = ()=>{
    const [formdata,setformdata]=useState({});
    const handle=(e)=>{
         console.log(e.target.value)
         const {name,value}=e.target
         setformdata({
             ...formdata,
              [name]:value
         }) 
       }

    async function handleSubmit(e){
        e.preventDefault()
        axios.post("https://reqres.in/api/users",{
            ...formdata
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange ={handle} type="text" placeholder="name" name="name" />
            <input onChange ={handle} type="text" placeholder="age" name="age"/>
            <input onChange ={handle} type="text" placeholder="address" name="address"/>
            <input onChange ={handle} type="text" placeholder="department" name="department"/>
            <input onChange ={handle} type="number" placeholder="salary" name="salary"/>
            <button>Submit</button>
        </form>
    )
}