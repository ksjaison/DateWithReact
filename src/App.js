import './App.css';
import { useState } from 'react';
import Counter from './Counter';

// Normal function App
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Jaison')
  const [age, setAge] = useState(30)
  const addCount = () => {
    setCount(count + 1)
    if (count % 2) {
      setName('Jaison');
      setAge(30 + count);
    }
    else {
      setName('Jaison Kuriyedom');
      setAge(30 - count);
    }
  }

  return (
    <div className="App">
      <br></br>
      <button onClick={addCount}>Add</button>
      <Counter Title='Name: ' name={name} />
      <Counter Number='Number: ' count={count} />
      <Counter Age='Age : ' age={age} />      
    </div>
  );
}

function App1() {
  return (
      <div>
        Please see the details of a person
        {App()}
        <div>This is the end of details</div>
      </div>
  );
}

export default App1;