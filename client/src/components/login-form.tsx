import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

   const InitialCredentialState = { email: "",
  password: ""
};

const [loginCredentials, setLoginCredentials] = useState(InitialCredentialState);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setLoginCredentials(prev => ({
      ...prev,
      [id]: value
    }))
  }

const LoginSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Handle login logic here
  
  try {
    // const res = await api.post('/api/login', loginCredentials);
    console.log("Login successful");

  }
  catch (error) {
    console.error("Login failed", error);
  }
}


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={LoginSubmit} className="grid gap-6">
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={loginCredentials.email}
                  onChange={handleChange}
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" 
                 value={loginCredentials.password}
                  onChange={handleChange} 
                required /> 
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="underline underline-offset-4">
                register
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
