'use client '
import React from 'react'

function student({params}) {

 

  return (
    <>
    <h1>Student List</h1>
    <p>Student Id:{params.studentlist}</p>
    </>
  )
}

export default student