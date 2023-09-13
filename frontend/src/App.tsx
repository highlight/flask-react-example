import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { H } from 'highlight.run'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [response, setResponse] = useState()
  const [error, setError] = useState<Error>()

  if (error) {
    throw error
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          H.identify('jay@highlight.io', {
            id: 'very-secure-id',
            phone: '867-5309',
            bestFriend: 'jenny'
          });
        }}>
          count is {count}
        </button>
        <button onClick={async () => {
          H.track('calling backend', { count });
          try {
            const r = await fetch('http://localhost:5001/json')
            setResponse(await r.json())
          } catch (e) {
            setError(e as unknown as Error)
          }
        }}>Send Backend Request</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {response && <div>{JSON.stringify(response)}</div>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
