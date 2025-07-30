"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup(){
    const [buttonDisabled,setButtonDisabled]=React.useState(false);
    const [loading,setLoading]=React.useState(false);
    const router=useRouter();
    const [user,setUser]=React.useState({
        email:"",
        username:"",
        password:""
    })
useEffect(()=>{ 
    if(user.email.length>0 && user.username.length>0 && user.password.length>0){
        setButtonDisabled(false)
    }
    else{
        setButtonDisabled(true)
    }
},[user])
const OnsignUp=async()=>{
    try {
        setLoading(true);
      const response= await axios.post('api/users/signup',user)
        console.log("Signup success", response.data);
        router.push("/login")
        
        
        
    } catch (error) {
        console.log("signup failed", error);
        //add toast error
    }
    finally{
        setLoading(false)
    }

}

return (
    <div className="flex flex-col items-center justify-center m-25 w-full max-w-md mx-auto p-8 border rounded-lg shadow-md  max-h-20px">
        <h1 className="p-5 text-xl">{loading?"processing ": "Signup  "}</h1>
       
        <label htmlFor="username"></label>
        <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e)=>setUser({...user, username:e.target.value})}
        placeholder="username"
        className="border p-2 m-3 bg-black"

        
        />
       
        <label htmlFor="email"></label>
        <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e)=>setUser({...user, email:e.target.value})}
        placeholder="email"
        className="border p-2 m-3 bg-black"

        
        />
       
        <label htmlFor="password"></label>
        <input
        id="password"
        type="text"
        value={user.password}
        onChange={(e)=>setUser({...user, password:e.target.value})}
        placeholder="password"
        className="border p-2 m-3 bg-black"

        
        />
       
     <button
     onClick={OnsignUp}
     className="bg-blue-500 p-2 m-3 rounded-md px-4 cursor-pointer">{buttonDisabled?"No signup ": "Signup "}</button>
     <Link href="/login">Login here</Link>
       
    </div>
)
}
