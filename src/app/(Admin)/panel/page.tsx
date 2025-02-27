"use client"
import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Page() {

    const [isLogin, setisLogin] = useState<null | boolean>(null)

    const handleSubmit = (e: { target: { value: any } }) =>{
        const value = e.target.value
        const password = "admin"
        if(value === "admin"){
            setisLogin(true)
        } else {
            setisLogin(false)

        }

    }

    if (isLogin === false) {
        return (
            <div><Invalid /></div>
        )
    } else if(isLogin === true){
        return (
            <div><Admin /></div>
        )
    } else {
        return (
            
            <Card className=" w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Sign in</Button>
            </CardFooter>
          </Card>
        )
    }




}

export default Page










function Invalid() {
    return (
        <div>Invalid</div>
    )
}



function Admin() {
    return (
        <div>page</div>
    )
}
