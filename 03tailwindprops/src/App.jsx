import { useState } from 'react'
import './App.css'
import Card from './component/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="Nidhi Sharma" channelName="https://www.google.com" />
      <Card username="Mahadeva Parvati"  />
      {/* <Card username="Mahadeva Parvati" channelName="https://www.facebook.com" /> */}
    </>
  )
}

export default App
