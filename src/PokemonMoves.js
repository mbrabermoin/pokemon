import React from 'react';
export default class PokemonMoves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: this.props.moves,
    }
  }
  render() {
    return (
        <div style={{overflow:"auto",height:"100%"}}>
            <table>
  <tr>
    <th>Move</th>
    <th>Level Learned At</th>
    <th>Learn Method</th>
  </tr>
  {this.state.moves.map(move => <tr>
    <td>{move.move.name}</td>
    <td>{move.version_group_details[0].level_learned_at}</td>
    <td>{move.version_group_details[0].move_learn_method.name}</td>
  </tr>)}
  
</table>
        </div >
        )
  }
}