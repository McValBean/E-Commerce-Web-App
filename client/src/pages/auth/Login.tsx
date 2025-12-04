import { LoginForm } from "@/components/login-form";


export default function LoginPage(){

    return(
        <div className="flex min-w-full h-screen justify-center items-center">
        <LoginForm className="w-full border-gray-500 sm:w-100"/>
        </div>
    )
}