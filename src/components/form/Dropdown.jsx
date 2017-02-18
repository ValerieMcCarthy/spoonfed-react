import React from 'react'
import slug from '../../utils/slugged'
import Label from './Label'
import roboStyle from '../../utils/stylizer'

 class Dropdown extends React.Component {

  render()  {
    
    const { selectOptions, 
            label, 
            styles, 
            name = slug( label) } = this.props
    
    const blockStyles = roboStyle( styles )

    return(
      <span >
        <Label
          className={ blockStyles( 'label' ) }
          forValue={ slug( label ) } 
          label={ label } 
        />
        <select 
          id={ slug( label ) } 
          name={name}
          className={ blockStyles( 'select' ) }
        >
          {selectOptions.map( (select, index) => {
            return (
              <option 
                value={select} 
                key={index}
                className={ blockStyles( 'option' )}
                > 
                  {select}
              </option>
            )
           })}
        </select>
      </span>
    )
  }
}


export default Dropdown
