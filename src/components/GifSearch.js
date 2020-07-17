import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    query: ""
  }

  handleChange = (e) => {
    this.setState({query: e.target.value});
  }

  handleSearchSubmit = (e) => {
    e.preventDefault()
    this.props.getGiphs(this.state.query)
  }

  render(){
    return(
      <form onSubmit={this.handleSearchSubmit}>
        <label>
          Enter a Search Term
          <input type="text" name="query" value={this.state.query} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Find Gifs" />
      </form>
    )
  }
}
