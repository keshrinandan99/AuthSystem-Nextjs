import {User} from "@/models/userModel"
import bcryptjs from "bcryptjs"
import nodemailer from 'nodemailer'
import 'dotenv/config'
export const sendEmail=async({email,userId,emailType}:any)=>{

    try {
        const hashedToken=await bcryptjs.hash(userId.toString(),10)
        if(emailType==='VERIFY'){
            await User.findByIdAndUpdate(userId,{verifyToken:hashedToken, 
                verifyTokenExpiry:Date.now()+3600000
            })
        }
        else if(emailType==='RESET'){
            await User.findByIdAndUpdate(userId,{forgotPasswordToken:hashedToken,
                forgotPasswordTokenExpiry:Date.now()+3600000
            })
        }
        // Looking to send emails in production? Check out our Email API/SMTP product!
            var transport = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                user: "a07adb44413a8f",
                pass: "a1c3e4850f21ec"
                }
            });
            const mailOptions={
                from:"sameernandan44@gmail.com",
                to:email,
                subject:emailType==="VERIFY"?"Verify your email":"Reset your email",
                html:`<p>Click <a href="${process.env.domain}/verifyemail?token=${hashedToken}">here </a> to ${emailType==="VERIFY"?"verify your email":"reset your password"}</p>`
            }
           const mailResponse= await transport.sendMail(mailOptions);
            return mailResponse;


    } catch (error:any) {
        throw new error("error occured while sending email",error)
    }
}