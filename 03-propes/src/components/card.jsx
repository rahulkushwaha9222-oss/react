import React from 'react'

const Card = (propes) => {
  return (
    
    <div className="card">
        <img src="https://images.unsplash.com/photo-1789921464199-d87f82e3f8d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
        <h1>{propes.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view here</button>
    </div>
  )
}

export default Card
