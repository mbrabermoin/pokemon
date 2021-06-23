import React from 'react';
export default class PokemonViews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sprites: this.props.sprites,
        }
    }
    render() {
        return (
            <div id="lista-views">
                <div className="middle-list-view">
                <div className="pokemon-view" >
                    <div>
                        <p className="view-title">Back Default</p>
                        <img alt="back_default" src={this.state.sprites.back_default}></img>
                    </div>
                </div>
                <div className="pokemon-view" >
                    <div>
                        <p className="view-title">Back Shiny</p>
                        <img alt="back_shiny" src={this.state.sprites.back_shiny}></img>
                    </div>
                </div>
                <div className="pokemon-view" >
                    <div>
                        <p className="view-title">Front Default</p>
                        <img alt="front_default" src={this.state.sprites.front_default}></img>
                    </div>
                </div>
                <div className="pokemon-view" >
                    <div>
                        <p className="view-title">Front Shiny</p>
                        <img alt="front_shiny" src={this.state.sprites.front_shiny}></img>
                    </div>
                </div>
                </div>
                <div className="middle-list-view">
                <div id="pokemon-view-big" >
                    <div>
                        <p className="view-title">Dream World</p>
                        <img alt="back_default" width="300" height="300" src={this.state.sprites.other.dream_world.front_default}></img>
                    </div>
                </div>
                </div>
            </div >
        )
    }
}