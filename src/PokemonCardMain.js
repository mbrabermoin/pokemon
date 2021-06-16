import React from 'react';
export default class PokemonCardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: this.props.moves,
    }
  }
  render() {
    return (
        <div style={{overflow:"auto",height:"100%"}}>
            Main
        </div >
        )
  }
}