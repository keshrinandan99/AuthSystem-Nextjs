"use client"
import React from "react";
import Link from "next/link";
import { Axios } from "axios";


export default function Signup(){

    const [user,setUser]=React.useState({
        email:"",
        username:"",
        password:""
    })

const OnsignUp=async()=>{

}

return (
    <div className="flex flex-col items-center justify-center m-25 w-full max-w-md mx-auto p-8 border rounded-lg shadow-md  max-h-20px">
        <h1 className="p-5 text-xl">Signup</h1>
       
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
     className="bg-blue-500 p-2 m-3 rounded-md px-4 cursor-pointer">Signup</button>
     <Link href="/login">Login here</Link>
       
    </div>
)
}
