import React, { Component } from "react";
import "./Cards.css";

class Cards extends Component{
    render(){
        const { pokemons } = this.props
        return(
            <section className="cards-pokemons">
                <img src={pokemons.image} alt="Pokémon"/>
                <ul>
                    <li>{pokemons.name}</li>
                    <li>{pokemons.type}</li>
                    <li>Average weight : {pokemons.averageWeight.value}{pokemons.averageWeight.measurementUnit}</li>
                </ul>
            </section>
        )
    }
}

export default Cards 