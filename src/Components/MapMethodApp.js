import React, { useState } from 'react'
import MapEmployee from './MapEmployee';

function MapMethodApp() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Jaison');
    const addCount = () => {
        setCount(count + 1);
        setName('Jaison Kuriyedom');
    }

    let emp = [
                { name:'Jaison',age: 30 }, 
                { name:'Tintu',age: 25 },
                { name:'Jeena',age: 27 },
                { name:'Iza',age: 5 },
                { name:'Jokuttan',age: 3 }
            ]
    return (
        <div><button onClick={addCount}>Hit Me!</button>
            {
               emp.map((obj, index)=>
                (
                    <div key = {index}>
                    <MapEmployee  Name = {obj.name} Age = {obj.age} />
                    </div>
                )
               )
            }
        </div>
    );
}

export default MapMethodApp
