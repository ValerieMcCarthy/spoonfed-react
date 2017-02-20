import React, { Component } from 'react'

class Card extends Component {
  render() {

    const { title, id, description } = this.props.info
    return (
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
  )
  }
  
}

export default Card