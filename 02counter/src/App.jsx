import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(5)

  function addValue(){
    setCount(count=> count+1);
  }
  function removeValue(){
    if(!(count <= 0)){
    setCount(count=> count -1);

    }
  }
  return (
    <>
     <h1>Chai Aur React</h1>
     <h1>Counter : {count}</h1>

     <button onClick = {addValue}>Add Value: {count}</button>
     <br />
     <button onClick={removeValue}>Remove Value:  {count}</button>
    </>
  )
}

export default App
