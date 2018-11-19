import React from "react";

// destructuring data from the props object for easier readability
export default function PokemonCards({ data }) {
	//declare variable to be used for final data
	let mappedPokemonCards;

	// if there is data then keep going   else ===> line 21
	if (data) {
		// if there are multiple cards  else ===> line 16
		if (data.cards) {
			//then map through each card and apply an image tag
			mappedPokemonCards = data.cards.map((card) => {
				return <img src={card.imageUrl} />;
			});
		} else {
			// otherwise display the single card data returned
			mappedPokemonCards = <img src={data.card.imageUrl} />;
		}
	} else {
		// otherwise set mappedPokemon to loading...
		mappedPokemonCards = "Loading...";
	}

	return <div className="pokemonCards-container">{mappedPokemonCards}</div>;
}
