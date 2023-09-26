"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const SignInButton = () => {
    const {data: session} = useSession();

    if (session && session.user){
         return(
            <div className='flex gap-4 ml-auto'>
                <p className='text-white font-bold py-2'>Welcome {session.user.name}</p>
                <Button className='text-white bg-blue-600 hover:bg-blue-700 ml-auto' onClick={() => signOut()}>
                    <FcGoogle className='mr-2 size-2xl'/>Sign Out
                </Button>

            </div>
         )
    }

  return (
   <Button className='text-white bg-blue-600 hover:bg-blue-700 ml-auto' onClick={() => signIn()}><FcGoogle className='mr-2 size-xl'/>Sign In</Button>
  )
}

export default SignInButton