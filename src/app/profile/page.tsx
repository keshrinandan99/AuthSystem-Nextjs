"use client"
import {useRouter} from 'next/navigation'
import axios from 'axios'
import React,{useState} from 'react'
import { NextRequest, NextResponse } from 'next/server'
export default function ProfilePage() {
  const [data,setData]=useState("Nothing")
    const router=useRouter();
    const  handleLogout=async ()=>{
        try {
            await axios.get("api/users/logout");
            console.log("Logged out successfull");
            router.push('/login');
            
            
        } catch (error) {
            return NextResponse.json({error:"Error while logout"},{status:400})
        }
       
    }

    const getUserDetails=async()=>{
      const res= await axios.get('api/users/me')
      console.log(res.data.data._id);
      
    }
  return (
    <>
    <div>Profile Page</div>
    <button
    onClick={handleLogout}
    className='bg-blue-500 p-2 m-3 rounded-md px-4 cursor-pointer'
    >Logout</button>
    </>
  )
}
