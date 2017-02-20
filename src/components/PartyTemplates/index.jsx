import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchTemplates } from '../../actions'
import Card from './Card'
import SearchInput, {createFilter} from 'react-search-input'

class PartyTemplateIndex extends React.Component {

  componentDidMount(){
    this.props.fetchTemplates()
  }

  constructor (){
    super()
    this.handleSearch = this.handleSearch.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
    this.state = {
      searchTerm: ''
    }
  }

  handleSearch(event){
    event.preventDefault()
  }

  updateSearch(term) {
    this.setState({
      searchTerm: term
    })    
  }


  render() {
    const filters = ['title', 'description'],
          templates = this.props.partyTemplates,
          featured = templates.slice(0, 4),
          filtered = templates.filter(createFilter(this.state.searchTerm, filters))

          // cards = templates.map((template, index) => <Card info={template} key={index} />),
          // featuredCards = cards.slice(0,4)

    return(
      <section>
      <h1> Featured Parties </h1>
        <section>
        </section> 
        <SearchInput onChange={this.updateSearch} />
        <section>
          {filtered.map( (template, index) => {
            return <Card info={template} key={index} />
          })}
        </section>
      </section>

      )
  }


}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchTemplates }, dispatch )  
}

function mapStateToProps(state){
  return {
    partyTemplates: state.partyTemplates
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PartyTemplateIndex)