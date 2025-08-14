import { NextResponse } from "next/server";
export async function GET(response:NextResponse){
    try {
        const response=NextResponse.json({
            message:"Logout successfully",
            status:200
        })
        response.cookies.set("token","",{httpOnly:true})
        return response;
        
    } catch (error) {
        return NextResponse.json({error:"Error while logging out "},{status:400})
    }
} 