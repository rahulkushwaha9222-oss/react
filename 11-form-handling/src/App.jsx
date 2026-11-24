import React from 'react'

const App = () => {

  const submithandler = (elem)=>{
    elem.preventDefault() ;
    console.log("form submit");
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        submithandler(elem) ;
      }}>
        <input type="text"  placeholder='enter your name'/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
