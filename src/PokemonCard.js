import React from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import PokemonCardMain from './PokemonCardMain.js';
import PokemonStats from './PokemonStats.js';
import PokemonMoves from './PokemonMoves.js';
import PokemonEvolutions from './PokemonEvolutions.js';
import PokemonViews from './PokemonViews.js';
export default class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      url: this.props.url,
      abilities: [],
      forms: [],
      game_indices: [],
      height: 0,
      id: 0,
      is_default: false,
      moves: [],
      order: 0,
      species: [],
      sprites: [],
      stats: [],
      types: [],
      weight: 0,
      image: null,
      detailsOpen: false,
      tabOpen: "main",
    }
  }
  componentDidMount() {
    axios.get(this.props.pokemon)
      .then(res => {
        console.log(res.data)
        let abilities = res.data.abilities;
        this.setState({
          abilities: abilities, forms: res.data.forms, game_indices: res.data.game_indices, height: res.data.height, id: res.data.id, image: res.data.sprites.front_default,
          is_default: res.data.is_default, moves: res.data.moves, order: res.data.order, species: res.data.species, sprites: res.data.sprites, stats: res.data.stats, types: res.data.types, weight: res.data.weight
        });
      })
  }
  handleCloseDetails = () => {
    this.setState({ detailsOpen: false })
  }
  handleOpenDetails = () => {
    this.setState({ detailsOpen: true })
    setTimeout(function () { document.getElementById("main").className += " active"; }, 10);

  }
  openMain = () => {
    this.setState({ tabOpen: "main" })
    var i, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById("main").className += " active";
  }
  
  openStats = () => {
    this.setState({ tabOpen: "stats" })
    var i, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById("stats").className += " active";
  }
  openMoves = () => {
    this.setState({ tabOpen: "moves" })
    var i, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById("moves").className += " active";
  }
  openEvolutions = () => {
    this.setState({ tabOpen: "evolutions" })
    var i, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById("evolutions").className += " active";
  }
  openViews = () => {
    this.setState({ tabOpen: "views" })
    var i, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById("views").className += " active";
  }
  render() {
    var tabContent = "";
    if (this.state.tabOpen === "main") {
      tabContent = <PokemonCardMain ></PokemonCardMain>
    } else {
      if (this.state.tabOpen === "stats") {
        tabContent = <PokemonStats stats={this.state.stats}></PokemonStats>
      } else {
        if (this.state.tabOpen === "moves") {
          tabContent = <PokemonMoves moves={this.state.moves}></PokemonMoves>
        } else {
          if (this.state.tabOpen === "evolutions") {
            tabContent = <PokemonEvolutions species={this.state.species}></PokemonEvolutions>
          } else {
            if (this.state.tabOpen === "views") {
              tabContent = <PokemonViews sprites={this.state.sprites}></PokemonViews>
            }
          }
        }
      }
    }
    return (
      <div className="pokemon-card" >
        <div onClick={this.handleOpenDetails}>
          <p className="pokemon-name">{this.state.name} - #{this.state.id}</p>
          <img alt={this.state.name} src={this.state.image}></img>
        </div>
        <Modal
          open={this.state.detailsOpen}
          onClose={this.handleCloseDetails}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ background: "grey", width: 1000, textAlign: "center", borderRadius: 5 }}>
            <h2 className="pokemon-name">{this.state.name} - #{this.state.id}</h2>

            <div className="tab">
              <button className="tablinks" onClick={this.openMain} id="main">Main</button>
              <button className="tablinks" onClick={this.openStats} id="stats">Stats</button>
              <button className="tablinks" onClick={this.openMoves} id="moves">Moves</button>
              <button className="tablinks" onClick={this.openEvolutions} id="evolutions">Evolutions</button>
              <button className="tablinks" onClick={this.openViews} id="views">Views</button>
            </div >
            <div className="tabcontent" >
              {tabContent}
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}