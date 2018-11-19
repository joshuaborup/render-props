import React from "react";

// destructuring data from the props object for easier readability
export default function Cards({ data }) {
	//declare variable to be used for final data
	let mappedCards;

	// if there is data then keep going   else ===> line 21
	if (data) {
		// if there are multiple cards  else ===> line 16
		if (data.cards) {
			//then map through each card and apply an image tag
			mappedCards = data.cards.map((card) => {
				return <img src={card.imageUrl} />;
			});
		} else {
			// otherwise display the single card data returned
			mappedCards = <img src={data.card.imageUrl} />;
		}
	} else {
		// otherwise set mapped to loading...
		mappedCards = "Loading...";
	}

	return <div className="Cards-container">{mappedCards}</div>;
}
