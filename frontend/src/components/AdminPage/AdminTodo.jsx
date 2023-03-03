import { useEffect, useState } from "react"
import AdminSidebar from "./AdminSidebar"


const AllTodos=()=>{
 const [todos,setTodos]=useState("")

    useEffect(()=>{
        fetch("https://enchanting-gold-tie.cyclic.app/adddata",{
        headers:{
            "Authorization":localStorage.getItem("authToken")
        }
       }).then(res=>res.json()).then(res=>{
        console.log(res)
        setTodos(res)
    }).catch(err=>console.log(err))
    },[])
   
     const deleteNote=(id)=>{
        console.log(id)
        fetch(`https://enchanting-gold-tie.cyclic.app/adddata/delete/:${id}`,{
            method:"DELETE",
            headers:{
                "Authorization":localStorage.getItem("authToken")
            }
        })
     }

    return (
        <>
        <h1 style={{borderColor:"grey",display:"flex"}}>Notes</h1>
        <div style={{border:"0px solid red",display:"flex"}}>
            <div style={{border:"0px solid blue",width:"16%"}}>
            <AdminSidebar/>

            </div>
            <div style={{border:"0px solid teal",width:"70%"}}>

        {todos?todos.map((el)=>{
            return (
                <>
                
                <div style={{display:"flex",backgroundColor:"plum",marginTop:"10px",width:"50%",alignItems:"center",margin:"auto"}}>
                
                <h2 style={{width:"10%",justifyContent:"flex-end"}}>{el.price}</h2>
                 <p style={{width:"60%",justifyContent:"flex-end"}}>{el.description}</p>
                 <button  style={{backgroundColor:"skyblue",marginTop:"10px",width:"50px",justifyContent:"flex-end"}}   onClick={()=>deleteNote(el._id)}>Delete</button>
                 </div>
                </>
            )
        }):<h1>No Notes</h1>}
        </div>
           </div>
        </>
    )
       
    
}
export {AllTodos}