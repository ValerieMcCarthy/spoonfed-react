import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchTemplates } from '../actions'
import SearchInput, {createFilter} from 'react-search-input'



class PartyTemplateList extends React.Component{
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

  render(){
    
  const filters = ['title', 'description'],
        templates = this.props.partyTemplates,
        featured = templates.slice(0, 4),
        filtered = templates.filter(createFilter(this.state.searchTerm, filters)),
          searchStyle = 'input input-search'
    
    return(
      <div>

        <h3 className='center'> Delightful parties you could be throwing</h3>
        <SearchInput className={searchStyle} onChange={this.updateSearch} />
      
      <div className="row">
        { filtered.map( (template, index) => {
        return (
      

        <div className="col s4 key={index}">
          <div className="card medium">
            <div className="card-image">
              <img src={template.party_picture} />

              <span className="card-title">{template.title}</span>
            </div>
            <div className='card-content'>
              <p><div className="thick">{template.theme_category}</div>
               {template.description}</p>
            </div>
            <div className="card-action grey lighten-2">
                <a href={`/parties/${template.id}`}>Learn More</a>
                <a className= 'right' href={`/parties/new?id=${template.id}`}>Clone</a>
                
              </div>
            </div>
          </div> )
          } )}
        </div>
     
       {this.props.children}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PartyTemplateList)