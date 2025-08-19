import { LoginForm } from "@/components/login-form";


export default function LoginPage(){

    return(
        <div className="flex min-w-full min-h-screen justify-center items-center">
        <LoginForm className="w-full sm:w-100"/>
        </div>
    )
}