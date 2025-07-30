"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function Login(){
    const router=useRouter();
    const [buttonDisabled,setButtonDisabled]=React.useState(false);
    const [loading,setLoading]=React.useState(false);
    const [user,setUser]=React.useState({
        email:"",
       
        password:""
    })
useEffect(()=>{
    if(user.email.length> 0 && user.password.length>0){
        setButtonDisabled(false)
    }
    else{
        setButtonDisabled(true)
    }
},[user])

const OnLogin=async()=>{
    try {
        setLoading(true);
       const response= await axios.post("api/users/login",user)
       console.log("Login successfull", response.data);
       router.push("/profile")
       
        
    } catch (error) {
        console.log("error while loggin in ", error);
        
    }
    finally{
        setLoading(false)
    }


}

return (
    <div className="flex flex-col items-center justify-center m-25 w-full max-w-md mx-auto p-8 border rounded-lg shadow-md  max-h-20px">
        <h1 className="p-5 text-xl">{loading?"Processing":"Login "} </h1>
       
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
     onClick={OnLogin}
     className="bg-blue-500 p-2 m-3 rounded-md px-4 cursor-pointer">{buttonDisabled?"No login": "Login"} </button>
     <Link href="/signup">SignUp here</Link>
       
    </div>
)
}
