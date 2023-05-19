import React from 'react'
import '../App.css'
import { useState } from 'react'
import SpreadOperatorCounter from './SpreadOperatorCounter';

function SpreadOperatorApp() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Jaison');
    const [age, setAge] = useState(30);

    const addCount = () => {
        setCount(count+1);
        if (count % 2) {
            setName('Jaison');
            setAge(30 + count);
          }
          else {
            setName('Jaison Kuriyedom');
            setAge(30 - count);
          }
    }

    // SPREAD OPERATOR
    // Here we create an object and passing to the another functional componets 
    // or in same file as object. so we need to use "3 dots" in front of the object name 
    // as showing in the "spreadoperatorcounter jsx file component below"
    let obj = {
        Title : 'Name: ', name, Number: 'Chest Number: ', count, Age: 'Age: ', age
    }

  return (
    <div>
      <button onClick={addCount}>Click Me!</button>

      {/* Passing as object another component for getting the value where this object 
      spread its value */}
      <SpreadOperatorCounter {...obj} />

    </div>
  )
}

export default SpreadOperatorApp
