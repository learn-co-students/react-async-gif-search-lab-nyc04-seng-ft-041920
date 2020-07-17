import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'


class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  getGiphs = (query) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(r => r.json())
    .then(gifs => {
      console.log(gifs.data)
      const imgs = gifs.data.map(gif => gif.images.original.url)
      console.log("this:", this)
      this.setState({
        gifs: imgs
      })
    })
  }

  componentDidMount(){
    this.getGiphs("frog")
  }


  render(){
    return (
      <div>
        <GifSearch getGiphs={this.getGiphs}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer