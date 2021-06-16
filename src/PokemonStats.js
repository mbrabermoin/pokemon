import React from 'react';
export default class PokemonStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hp: this.props.stats[0].base_stat,
            attack: this.props.stats[1].base_stat,
            defense: this.props.stats[2].base_stat,
            spattack: this.props.stats[3].base_stat,
            spdefense: this.props.stats[4].base_stat,
            speed: this.props.stats[5].base_stat,
            maxhp: 255,
            maxattack: 190,
            maxdefense: 250,
            maxspattack: 194,
            maxspdefense: 250,
            maxspeed: 200,
            total: this.props.stats[0].base_stat + this.props.stats[1].base_stat + this.props.stats[2].base_stat + this.props.stats[3].base_stat + this.props.stats[4].base_stat + this.props.stats[5].base_stat,
            maxtotal: 255 + 190 + 250 + 194 + 250 + 250,
        }
    }
    render() {
        var hpclass = "bar-filler-hp bar-filler-" + Math.trunc(this.state.hp / this.state.maxhp * 100)
        var attackclass = "bar-filler-attack bar-filler-" + Math.trunc(this.state.attack / this.state.maxattack * 100)
        var defenseclass = "bar-filler-defense bar-filler-" + Math.trunc(this.state.defense / this.state.maxdefense * 100)
        var spattackclass = "bar-filler-spattack bar-filler-" + Math.trunc(this.state.spattack / this.state.maxspattack * 100)
        var spdefenseclass = "bar-filler-spdefense bar-filler-" + Math.trunc(this.state.spdefense / this.state.maxspdefense * 100)
        var speedclass = "bar-filler-speed bar-filler-" + Math.trunc(this.state.speed / this.state.maxspeed * 100)
        var totalclass = "bar-filler-total bar-filler-" + Math.trunc(this.state.total / this.state.maxtotal * 100)
        return (
            <div>
                <div style={{ display: "flex", paddingRight: 30, paddingLeft: 30 }}>
                    <div style={{ width: "47%" }}>
                        <div className="bar-container">
                            <div className="bar-title">HP</div>
                            <div className="bar">
                                <div className={hpclass}>{this.state.hp}/{this.state.maxhp}</div>
                            </div>
                        </div>
                        <div className="bar-container">
                            <div className="bar-title">ATTACK</div>
                            <div className="bar">
                                <div className={attackclass}>{this.state.attack}/{this.state.maxattack}</div>
                            </div>
                        </div>
                        <div className="bar-container">
                            <div className="bar-title">DEFENSE</div>
                            <div className="bar">
                                <div className={defenseclass}>{this.state.defense}/{this.state.maxdefense}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "6%" }}></div>
                    <div style={{ width: "47%" }}>
                        <div className="bar-container">
                            <div className="bar-title">SPECIAL ATTACK</div>
                            <div className="bar">
                                <div className={spattackclass}>{this.state.spattack}/{this.state.maxspattack}</div>
                            </div>
                        </div>
                        <div className="bar-container">
                            <div className="bar-title">SPECIAL DEFENSE</div>
                            <div className="bar">
                                <div className={spdefenseclass}>{this.state.spdefense}/{this.state.maxspdefense}</div>
                            </div>
                        </div>
                        <div className="bar-container">
                            <div className="bar-title">SPEED</div>
                            <div className="bar">
                                <div className={speedclass}>{this.state.speed}/{this.state.maxspeed}</div>
                            </div>
                        </div>
                    </div>
                </div >
                <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                    <div>
                        <div className="bar-container">
                            <div className="bar-title">TOTAL</div>
                            <div className="bar">
                                <div className={totalclass}>{this.state.total}/{this.state.maxtotal}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}