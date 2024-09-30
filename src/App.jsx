import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  const [value, setValue] = useState(0)
  const handleIncrement = () =>{
    setValue(currentValue => currentValue + 1);
  }

  const handleDecrement = () =>{
    setValue(currentValue => currentValue - 1);
  }

  return (
    <>
      <div className="card">
        <Input
        value = {value}
        placeholder={value}
        >
        </Input>
       <Button 
        label="Increase Count"
        onClick={handleIncrement}></Button>
        <Button 
        label="Increase Count"
        onClick={handleDecrement}></Button>
      </div>
    </>
  )
}

export default App
