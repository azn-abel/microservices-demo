import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import goGopher from '/go-gopher.svg'
import './App.css'

import { broker } from './api/broker'

function App() {
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  async function testBroker() {
    if (loading) return
    setLoading(true)
    const brokerResponse: any = await broker()
    setResponse(JSON.stringify(brokerResponse.data) || brokerResponse.message)
    setLoading(false)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={goGopher} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Go + React</h1>
      <div className="card">
        <button onClick={testBroker} disabled={loading}>
          Test the broker
        </button>
        <button onClick={testBroker} disabled={loading}>
          Test microservice 2
        </button>
        <button onClick={testBroker} disabled={loading}>
          Test microservice 3
        </button>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        {loading ? "Loading..." : response || "Click a button to test a microservice"}
      </p>
    </>
  )
}

export default App
