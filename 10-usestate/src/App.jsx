import React, { useState } from 'react'

const App = () => {
  const [num , setNum ] = useState({user:"rahul" , age:20})
  const btnclick = ()=>{
    const newNum = {...num}
    newNum.user ="vector" 
    newNum.age = 20 
    setNum(newNum) ;
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnclick}>click</button>
    </div>
  )
}

export default App
