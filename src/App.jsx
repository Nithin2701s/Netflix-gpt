import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-900 text-white text-center py-24 space-y-14' >
      <div className='flex justify-center gap-x-16' >
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react h-20 animate-spin-custom" alt="React logo" />
        </a>
      </div>
      <h1 className='text-center  text-[3rem] font-semibold gap-x-20'>Vite + React</h1>
      <div className="card space-y-7">
        <button onClick={() => setCount((count) => count + 1)} className='border p-2 rounded-md border-gray-600'>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
