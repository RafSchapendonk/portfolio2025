import { useState } from 'react'
import '../sass/components/_testcomponent.scss'

export default function TestComponent() {
  const [count, setCount] = useState(0)
    return (
        <>
        <div className="testcomponent">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
        </>
    )
}