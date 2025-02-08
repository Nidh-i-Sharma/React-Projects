import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordGeneratorUI from './componenets/PasswordGenerate'
import { ThemeProvider } from '@mui/material/styles';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ color: "#1976d2" }}> {/* Primary color (default blue) */}
    <PasswordGeneratorUI />
  </div>
  
  )
}

export default App
