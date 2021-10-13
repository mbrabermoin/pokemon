import React from 'react';
import axios from 'axios';
export default class PokemonEvolutions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: this.props.species,
      name: this.props.species.name,
      evolution_chain: [],
      firstname: "",
      secondname: "",
      thirdname: "",
      fourthname: "",
      firstphoto: "",
      secondphoto: "",
      thirdphoto: "",
      fourthphoto: "",
    }
  }
  componentDidMount() {
    axios.get(this.props.species.url)
      .then(res => {
        axios.get(res.data.evolution_chain.url)
          .then(res => {
            this.setState({ firstname: res.data.chain.species.name })
            axios.get(res.data.chain.species.url)
              .then(resforphoto => {
                axios.get(resforphoto.data.varieties[0].pokemon.url)
                  .then(resforphoto => {
                    console.log(resforphoto.data.sprites.front_default)
                    this.setState({ firstphoto: resforphoto.data.sprites.front_default })
                  })
              })
            if (res.data.chain.evolves_to != null && res.data.chain.evolves_to != "") {
              this.setState({ secondname: res.data.chain.evolves_to[0].species.name })
              axios.get(res.data.chain.evolves_to[0].species.url)
                .then(resforphoto => {
                  axios.get(resforphoto.data.varieties[0].pokemon.url)
                    .then(resforphoto => {
                      console.log(resforphoto.data.sprites.front_default)
                      this.setState({ secondphoto: resforphoto.data.sprites.front_default })
                    })
                })
              if (res.data.chain.evolves_to[0].evolves_to != null && res.data.chain.evolves_to[0].evolves_to != "") {
                this.setState({ thirdname: res.data.chain.evolves_to[0].evolves_to[0].species.name });
                axios.get(res.data.chain.evolves_to[0].evolves_to[0].species.url)
                  .then(resforphoto => {
                    axios.get(resforphoto.data.varieties[0].pokemon.url)
                      .then(resforphoto => {
                        console.log(resforphoto.data.sprites.front_default)
                        this.setState({ thirdphoto: resforphoto.data.sprites.front_default })
                      })
                  })
                if (res.data.chain.evolves_to[0].evolves_to[0].evolves_to != null && res.data.chain.evolves_to[0].evolves_to[0].evolves_to != "") {
                  this.setState({ fourthname: res.data.chain.evolves_to[0].evolves_to[0].evolves_to[0].species.name });
                  axios.get(res.data.chain.evolves_to[0].evolves_to[0].evolves_to[0].species.url)
                    .then(resforphoto => {
                      axios.get(resforphoto.data.varieties[0].pokemon.url)
                        .then(resforphoto => {
                          console.log(resforphoto.data.sprites.front_default)
                          this.setState({ fourthphoto: resforphoto.data.sprites.front_default })
                        })
                    })
                } else {
                  this.setState({ fourthname: "" });
                }
              } else {
                this.setState({ thirdname: "" });
                this.setState({ fourthname: "" });
              }
            } else {
              this.setState({ secondname: "" });
              this.setState({ thirdname: "" });
              this.setState({ fourthname: "" });
            }
          })
      })

  }
  render() {
    var secondcard = "";
    var thirdcard = "";
    var fourthcard = "";
    if (this.state.secondname !== "") {
      secondcard = <div className="evolution-view" >
        <div>
          <p className="view-title">{this.state.secondname}</p>
          <img alt="front-default" src={this.state.secondphoto}></img>
        </div>
      </div>
    }
    if (this.state.thirdname !== "") {
      thirdcard = <div className="evolution-view" >
        <div>
          <p className="view-title">{this.state.thirdname}</p>
          <img alt="front-default" src={this.state.thirdphoto}></img>
        </div>
      </div>
    }
    if (this.state.fourthname !== "") {
      fourthcard = <div className="evolution-view" >
        <div>
          <p className="view-title">{this.state.fourthname}</p>
          <img alt="front-default" src={this.state.fourthphoto}></img>
        </div>
      </div>
    }
    return (
      <div className="evolution-screen">
        <div className="horizontal-list">
          <div className="evolution-view" >
            <div>
              <p className="view-title">{this.state.firstname}</p>
              <img alt="front-default" src={this.state.firstphoto}></img>
            </div>
          </div>
          {secondcard}{thirdcard}{fourthcard}
        </div>
      </div >
    )
  }
}