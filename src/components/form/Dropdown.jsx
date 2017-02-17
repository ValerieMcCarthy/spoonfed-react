import React from 'react'
import slug from '../../helpers/slugged'
import Label from './Label'

const Dropdown = ({ selectOptions, label, name = slug(label) }) => {

  return(
    <span>
      <Label forValue={slug( label )} label={label} />
      <select id={ slug( label ) } name={name}>
        {selectOptions.map( (select, index) => {
          return (
            <option value={select} key={index}>{select}</option>
          )
         })}
      </select>
    </span>
    )
}


export default Dropdown
