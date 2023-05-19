import React from 'react'

function MapEmployee(props) {
  return (
    <div>
      <h1>Key: {props.index} Name: {props.Name}, Age: {props.Age}</h1>
    </div>
  )
}

export default MapEmployee
