'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home () {
  const router=useRouter();
  // const [clickable,setClickable]=useState(0)
  // const handleClick=()=>{
  //    setClickable(clickable+1)
    
  // }
  // const handleClicks =()=>{
  //   setClickable(clickable-1)
  // }

  // //inter componemet Create 
  // const InnerComponent =()=>{
  //   return <>
  //   <h1>hello</h1>
  //   </>
  // }
  return (
    <main >
   <h1>Hello World</h1>
   {/* <Users name="Pallav"/>
   <Users age="23"/> */}
   {/* <button onClick={handleClick}>+</button>
   <h3>Your Counter:{clickable}</h3>
   <button onClick={handleClicks}>-</button>
   <InnerComponent/> *** we can use inner componet this way or next way ***
   {InnerComponent()} */}
   {/* //Route Page using Link //
   <Link href="/login">Login Page</Link>
   // routing Between page using Navigation//
   <button onClick={()=>router.push("/login")}>Login</button> */}
   <button onClick={()=>router.push("/studentlist")}>Student List</button>
    </main>
  )
}
//other component use in main component .
// const Users= (props)=>{
//   return(
//     <>
//     <h2>Hii i am a user My name is:{props.name} </h2>
//     <p>My age is {props.age}</p>
//     </>
//   )
// }