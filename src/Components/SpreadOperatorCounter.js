import React from 'react'

//SPREAD OPERATOR (Rest method)
// Here object recieves as 3 dots (spread operator) and getting values 
// from the object as showing below
function SpreadOperatorCounter({...obj }) {
    return (
        <div>
            <h3>
               {obj.Title} {obj.name} <br/>
               {obj.Number} {obj.count} <br/>
               {obj.Age} {obj.age}
            </h3>
        </div>
    );
}

export default SpreadOperatorCounter
