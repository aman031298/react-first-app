import React from 'react'
import userimage from '../image/user.jpeg'
export default function middle() {
  return (
    <div>
      <h2>I am middle Component</h2>
      <img src={userimage} slt='userimage' height={300} width={300}></img>
    </div>
  )
}
