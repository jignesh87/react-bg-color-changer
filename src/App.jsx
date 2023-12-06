import { useState } from 'react'

import './App.css'

function App() {

  const [color, setColor] = useState("olive")
  return (
    <>
      <div className='w-full h-screen duration-200' 
        style={{backgroundColor:color}}
        >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-start bg-white px-3 py-2 rounded-2xl gap-3'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700'>Red</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-700'>Green</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700'>Blue</button>
            <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-700'>Orange</button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-700'>Yellow</button>
            <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-700'>Pink</button>
            <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-700'>Purple</button>
            <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black'>Black</button>
          </div>
        </div>
        </div>
    </>
  )
}

export default App
