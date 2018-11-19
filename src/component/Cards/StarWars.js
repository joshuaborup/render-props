import React from "react";

export default function StarWarsCards(props) {
	return (
		<div className="pokemonCards-container">
			{/* if there is data then show it, otherwise show the "loading..." string */}
			{props.data ? (
				<div>
					<h1>{props.data.name}</h1>
					<h1>{props.data.height}</h1>
					<h1>{props.data.hair_color}</h1>
				</div>
			) : (
				"Loading..."
			)}
		</div>
	);
}
