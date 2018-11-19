import React from "react";

export default function PokemonCards({ data }) {
	let mappedPokemonCards = data
		? data.cards.map((pokemon) => {
				return <img src={pokemon.imageUrl} />;
		  })
		: null;

	return <div className="pokemonCards-container">{mappedPokemonCards}</div>;
}
