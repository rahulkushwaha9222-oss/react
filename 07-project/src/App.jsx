import React from 'react'
import Section1 from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'

import Page1Content from './component/Section1/Page1Content'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1536148935331-408321065b18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color:'seagreen',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1763128516808-785e80c1dd68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color:'royalblue',
      tag: 'underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color:'pink',
      tag: 'underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color:'black',
      tag: 'underIT'
    },
     {
      img: 'https://plus.unsplash.com/premium_photo-1673976275849-986056b83cae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color:'black',
      tag: 'average'
    },
     {
      img: 'https://plus.unsplash.com/premium_photo-1669592892297-9635e5c15f36?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color:'gray',
      tag: 'good'
    },
     {
      img: 'https://images.unsplash.com/photo-1794210005058-606d9c45767f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: '',
      color:'red',
      tag: 'amazing hourse riding '
    },
  ]

  return (
    <div>

      <Section1 users={users}/>
     
    </div>
  )
}

export default App
