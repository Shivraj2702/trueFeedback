import { resend } from "@/lib/resend";
import VerificationEmail from "../../email/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";


export async function sendVerification(
    email:string,
    username:string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
          });

         return { success: true, message: " verification email send successfully"}
    } catch (error) {
        console.log("Error sending verificatio email", error)
        return { success: false, message: "failed to send verification email"}
    }
}