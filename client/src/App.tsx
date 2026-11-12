import { useState } from 'react'
import './App.css'

function App() {
  const [response, setResponse] = useState<string>()
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)

  async function callServer() {
    setIsLoading(true)
    setError(undefined)

    try {
      const result = await fetch('/data')

      if (!result.ok) {
        throw new Error(`The server responded with ${result.status}.`)
      }

      setResponse(JSON.stringify(await result.json(), null, 2))
    } catch (error) {
      setResponse(undefined)
      setError(error instanceof Error ? error.message : 'Unable to reach the server.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main>
      <h1>Server request</h1>
      <p>Request data from the Express server.</p>
      <button type="button" onClick={callServer} disabled={isLoading}>
        {isLoading ? 'Calling server...' : 'Call server'}
      </button>
      {response && <pre>{response}</pre>}
      {error && <p className="error">{error}</p>}
    </main>
  )
}

export default App
