import React from 'react'
import Link from 'next/link'

const  studentlist=()=> {
  return (
    <>
    <ul>
        <li>
            <Link  href="/studentlist/1">1</Link>
        </li>
        <li>
        <Link  href="/studentlist/2">2</Link>
        </li>
        <li>
        <Link  href="/studentlist/3">3</Link>
        </li>
        <li>
        <Link  href="/studentlist/4">4</Link>
        </li>
    </ul>
    
    </>
  )
}

export default studentlist