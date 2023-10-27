'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

function Login() {
  const router=useRouter();
  const navigation =(name)=>{
    router.push(name)
    router.push("/");
  }
  return (<>
    <div>Login Page</div>
    {/* <Link href="/" >Home Page</Link> */}
    <button onClick={()=>navigation("/")}>Home</button>
  </>
  )
}

export default Login