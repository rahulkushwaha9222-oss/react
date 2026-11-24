import React from 'react'

const App = () => {

const user ={
  name:'roni' ,
  age:24,
  city:'bhopal'
}
{/*ye jo JSON.stringify ha vo object ko string me convert karne ke liye kam aata hai */}
localStorage.setItem('user' ,JSON.stringify (user))
{/*ye jo JSON.parse ha vo  string ko dubara object  me convert karne ke liye kam aata hai */}
const usera = JSON.parse(localStorage.getItem('user') );
 console.log(usera.name);
 
  return (
    <div>
     App
    </div>
  )
}

export default App
