import { useEffect, useState } from 'react'
import Progress from './Progress'
import './App.css'

function App() {
  const [progressVal, setProgressVal] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressVal(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Progress progress={progressVal} />
      <Progress progress={70} />
    </>
  )
}

export default App
