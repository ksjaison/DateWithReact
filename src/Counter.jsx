import React from 'react'

function Counter(/*props*/{ Title, name, Number, count, Age, age }) {
    //     //const { Title, name, Number, count, Age, age } = props;
    return (
        <div>
            <h3>
                {Title}{name}
                {Number}{count}
                {Age}{age}
            </h3>
        </div>
    )
 }


    export default Counter
