import classNames from 'classnames'

export const defaultStyles = {
  label: 'f6 b db mb2'

}

const split = string => string.split(" ")


const stylizer = styles => element => {
  let customClasses = [],
        defaultClasses = []


  if ( styles[element] ) {
    customClasses = split( styles[element] )
  }
  
  if (defaultStyles[element]) {
    defaultClasses = split( defaultStyles[element] )
  }

  return classNames( defaultClasses, customClasses, element)
}



export default stylizer