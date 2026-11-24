import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

function achange(){
  console.log("a ki valur change ho gyi");
  
}
function bchange(){
  console.log("b ki value change ho gyi");
}

useEffect(function(){
 achange()
},[a])
useEffect(function(){
 bchange()
},[b])


  return (
    <div>
      <h2>a value {a}</h2>
      <h2>b value {b}</h2>
      <button onClick={()=>{
        setA(a+1)
      }}>change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>change B</button>
    </div>
  )
}

export default App
