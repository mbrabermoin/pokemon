import React from 'react';
import axios from 'axios';
export default class PokemonEvolutions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: this.props.species,
      evolution_chain: [],
    }
  }
  componentDidMount() {
    console.log(this.props.species.url)
    axios.get(this.props.species.url)
      .then(res => {
        axios.get(res.data.evolution_chain.url)
        .then(res => {
          console.log(res.data)
          this.setState({evolution_chain: res.data})
        })
      })
      
  }
  render() {
    return (
        <div>
            Evolutions En construccion! 
        </div >
        )
  }
}