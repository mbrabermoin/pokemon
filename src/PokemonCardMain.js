import React from 'react';
import axios from 'axios';
export default class PokemonCardMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: this.props.species,
      specie: "",
      description: "",
      is_baby: false,
      is_legendary: false,
      is_mythical: false,
      has_gender_differences: false,
      generation: "",
      habitat: "",
      image: this.props.image,
    }
  }
  componentDidMount() {
    axios.get(this.props.species.url)
      .then(res => {
        this.setState({ is_baby: res.data.is_baby })
        this.setState({ is_legendary: res.data.is_legendary })
        this.setState({ is_mythical: res.data.is_mythical })
        this.setState({ has_gender_differences: res.data.has_gender_differences })
        this.setState({ specie: res.data.genera[7].genus })
        this.setState({ generation: res.data.generation.name })
        this.setState({ habitat: res.data.habitat.name })
        this.setState({ description: res.data.flavor_text_entries[4].flavor_text })
      })
  }
  render() {
    var babyimage = "";
    var legendaryimage = "";
    var mythicalimage = "";
    var genderdiff = "";
    if (this.state.is_baby) {
      babyimage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1200px-Check_green_icon.svg.png";
    } else {
      babyimage = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1024px-Flat_cross_icon.svg.png";
    }
    if (this.state.is_legendary) {
      legendaryimage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1200px-Check_green_icon.svg.png";
    } else {
      legendaryimage = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1024px-Flat_cross_icon.svg.png";
    }
    if (this.state.is_mythical) {
      mythicalimage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1200px-Check_green_icon.svg.png";
    } else {
      mythicalimage = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1024px-Flat_cross_icon.svg.png";
    }
    if (this.state.has_gender_differences) {
      genderdiff = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/1200px-Check_green_icon.svg.png";
    } else {
      genderdiff = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flat_cross_icon.svg/1024px-Flat_cross_icon.svg.png";
    }
    return (
      <div style={{ overflow: "auto", height: "100%" }}>
        <img width="100" height="100" alt={this.state.name} src={this.state.image}></img>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }} >
          <div><h3>Baby?</h3></div>
          <div style={{ paddingLeft: 10 }}><img width="30" height="30" alt="" src={babyimage}></img></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }} >
          <div><h3>Legendary?</h3></div>
          <div style={{ paddingLeft: 10 }}><img width="30" height="30" alt="" src={legendaryimage}></img></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }} >
          <div><h3>Mythical?</h3></div>
          <div style={{ paddingLeft: 10 }}><img width="30" height="30" alt="" src={mythicalimage}></img></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }} >
          <div><h3>Gender Differences?</h3></div>
          <div style={{ paddingLeft: 10 }}><img width="30" height="30" alt="" src={genderdiff}></img></div>
        </div>
        <div style={{ height: "10%" }}>
          <div><h3>Genus? {this.state.specie}</h3></div>
        </div>
        <div style={{ height: "10%" }}>
          <div><h3>Generation? {this.state.generation}</h3></div>
        </div>
        <div style={{ height: "10%" }}>
          <div><h3>Habitat? {this.state.habitat}</h3></div>
        </div>
      </div >
    )
  }
}