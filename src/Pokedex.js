import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import PokemonCard from './PokemonCard.js';

export default class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            next: "",
            previous: "",
            actualPage: 1,
            openDetail: false,
        }
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30`)
            .then(res => {
                let pokes = res.data.results;
                let next = res.data.next;
                let previous = res.data.previous;
                this.setState({ pokemons: pokes, next: next, previous: previous, actualPage: 1 });
            })
    }

    goPrevious() {
        axios.get(this.state.previous)
            .then(res => {
                let pokes = res.data.results;
                let next = res.data.next;
                let previous = res.data.previous;
                let actual = this.state.actualPage;
                this.setState({ pokemons: pokes, next: next, previous: previous, actualPage: actual - 1 });
            })
    }
    goNext() {
        axios.get(this.state.next)
            .then(res => {
                let pokes = res.data.results;
                let next = res.data.next;
                let previous = res.data.previous;
                let actual = this.state.actualPage;
                this.setState({ pokemons: pokes, next: next, previous: previous, actualPage: actual + 1 });
            })
    }
    render() {
        var previousButton = "";
        var nextButton = "";
        if (this.state.previous != null) {
            previousButton = <Button onClick={() => { this.goPrevious() }} variant="contained" color="primary">
                Previous
          </Button>
        } else {
            previousButton = <Button disabled variant="contained" color="primary">
                Previous
          </Button>
        }
        if (this.state.next != null) {
            nextButton = <Button onClick={() => { this.goNext() }} variant="contained" color="primary">
                Next
    </Button>
        } else {
            nextButton = <Button disabled variant="contained" color="primary">
                Next
    </Button>
        }
        return (
            <div>
                <div id="lista-pokemons">
                    {this.state.pokemons.map(pokemon => <PokemonCard key={pokemon.url} name={pokemon.name} pokemon={pokemon.url}></PokemonCard>)}
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ margin: 40 }}>
                        {previousButton}
                    </div>
                    <div style={{ margin: 40 }}>
                        {this.state.actualPage}
                    </div>
                    <div style={{ margin: 40 }}>
                        {nextButton}
                    </div>
                </div>                
            </div>
        )
    }
}