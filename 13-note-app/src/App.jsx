

import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  const [task, setTask] = useState([])

  const submitHendler = (e) => {
    e.preventDefault();



   const copyTask = [...task] 

   copyTask.push({title , detail})

   setTask(copyTask)

   

    setTitle('')
    setDetail('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex   bg-black text-white'>
      <form onSubmit={(e) => {
        submitHendler(e);
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start '>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}

        />
        {/* DETAILED VALA INPUT  */}
        <textarea
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded '
          placeholder='Write details here'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'
        >
          Add Note
        </button>


      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {

            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 bg-[url('data:image/webp;base64,UklGRhgDAABXRUJQVlA4IAwDAAAQGgCdASqrAOoAPp1MoU0lpCMiIjdJcLATiWdt5+89DD1442Blex2aKZXhoLi2ZY1iVnFAWbcCqll2rBoTMTf0CFpQJp40WXFPK1f2pFKCXWXMUEtDiyxvmtbwHJFFFIcNPDXoTprWcieFAfzL9VwohxMXoSqu/j2vw7MKK3TgVScjrdWp6J1gAOHEB61OVLScIVMmUsKox92/jtXjVxT5hGjquJyd4K82WEYD9Ij3v3gdMNNv3fQJvP4xXjWav8wuz1XE5O+qvNldyhQKb6JE9yNb4X+v4SCAAP76qKxTbWGryqcPj6KaP3kvFop72SEXeZF1q0EUfXNgXyNhIcZgCbG0STkst5T5BqPCEPxXhWmVeoCcPxAjB0nwuELAUIJkaD4L26oIMqS441wZv6g2U56KyA785gbdNyZfkNw8fEWDJzUDpHAzR8toDa0TIwvUjEp9BI+00mRkrwTJZ7apgK2NlioU3N13JB/Gioe+kcMyPIO0d3jWcQnLjJV221MNqpUteXC2Z2P26d7OVcATFBHSTLVOa8mFG7BqIOo3qamoJK1Yy2v0RzR9eyZ4KZPJXEs1+gYylOOwwcNHEiczCSgEmATKdyXMcbjosKtLiwEqxDGQFDCWEfgipuXxF/Eb0q8VCRO/j8MAK8Uhly2pVWmnipzSSQI/L8RonKGkHAcIE8wFu+lpOVxQddgMaAevNn4S5Y70A3kHA8jTTd/aBYB1uHLo9Av4Eu3xrNb/ghAAAGBFEDIjaITAOdpAVDE++O1RQ9Rvd9em6ClEubdu9hVTPFpFh94JgNXvXIaCCBCqUOm5g77WKL93dFCSIHwPuSEuQzMQuaCvV2r4lpdkbfV79wxx0yrUTySk+sVXcNpByePTabWo/hzrD8imZr3smSOufmNKb68u+PGJZfKVE0EHX0IniiipJUgxpRaNpZDfYYkIu1Wc6TjeBUYvTgLBWjcSjXsoTSy7nXj4/CAAAGb4fk0oTFsHZFIafJAIzLK/eBI5Dwygt+JMISKsHkZOST0zywplNTsAAAA=')]">
              <div>
                <h3 className='leading-tight p-2 text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight p-2 text-xs font-semibold text-gray-600'>{elem.detail}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded-4xl font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
