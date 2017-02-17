import React from 'react'

const Label = ({ forValue, label }) => { 
  return <label htmlFor={forValue}>{label}</label>
  
}
export default Label