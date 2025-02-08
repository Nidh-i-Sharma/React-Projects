import { useEffect, useState } from 'react'
import { Button, Grid } from '@mui/material';

import './App.css'
import ColorButton from './components/Button';

function App() {

  const [color, setColor] = useState('olive');

  const colors = ["green", "red", "blue", "orange", "black", "yellow", "pink", "purple"];

  useEffect(()=>{
    localStorage.setItem("bgColor",color)
  },[color])

  return (
    <>
    <input
  type="text"
  placeholder="Enter a color (e.g., cyan or #ff5733)"
  onChange={(e) => setColor(e.target.value)}
  style={{ padding: "10px", marginTop: "10px", border: "1px solid black" }}
/>

    <h2 style={{ textAlign: "center", color: color === "black" ? "white" : "black" }}>
  Selected Color: {color.toUpperCase()}
</h2>

    <div style={{ backgroundColor: color, height: "50vh", padding: "20px" }}>
      {colors.map((c) => (
        <ColorButton key={c} color={c} setColor={setColor} />
      ))}
    </div>

    <Button variant="outlined" color="red"onClick={() => setColor("olive")} style={{ marginTop: "10px" }}>
    Reset
    </Button>
    </>
  );
}

export default App
