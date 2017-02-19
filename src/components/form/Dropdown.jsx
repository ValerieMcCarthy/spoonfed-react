import React from 'react'
import slug from '../../utils/slugged'
import Label from './Label'
import roboStyle from '../../utils/stylizer'

 class Dropdown extends React.Component {

  render()  {
    
    const { selectOptions, 
            label, 
            styles = {}, 
            name = slug( label ),
            id = slug( label ),
            ...props } = this.props
    
    const blockStyles = roboStyle( styles )

    return(
      <span className={ blockStyles('span') } >
        { label && 
        <Label className={ blockStyles( 'label' ) }
               forValue={ id } 
               label={ label } />
        }
        
        <select id={ id  } 
                name={name}
                className={ blockStyles( 'select' ) } 
                {...props} >
         
          {selectOptions.map( (select, index) => {
            return (
              <option value={select} 
                      key={index}
                      className={ blockStyles( 'option' )}> 
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
